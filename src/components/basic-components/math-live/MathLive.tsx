import React, { useState, useEffect, useRef } from 'react';
import * as Mathlive from 'mathlive';
import styles from './math-live.module.css';

type IProps = {
  formula: string;
  onChange?: (values: (string | undefined)[]) => void;
  initialValues?: string[];
  className?: string;
};

type IInputTree = (string | { num: string } | IInputTree)[];

const MathLive: React.FC<IProps> = ({ formula, onChange, initialValues = [], className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inputTree, _setInputTree] = useState<IInputTree>();
  const [inputFormula, _setInputFormula] = useState(formula);
  const inputTreeRef = useRef(inputTree);
  const inputFormulaRef = useRef(inputFormula);

  console.log(initialValues);

  const setInputTreeForm = (tree: IInputTree, formula: string) => {
    inputTreeRef.current = tree;
    inputFormulaRef.current = formula;
    _setInputFormula(formula);
    _setInputTree(tree);
  };

  useEffect(() => {
    if (!ref) return;

    const ml = new Mathlive.MathfieldElement();

    ml.setOptions({ virtualKeyboardMode: 'off' });
    ml.value = formula;

    // Add initial values
    if (initialValues && initialValues.length > 0) {
      ml.value = insertInitialValues(formula, initialValues);
    }

    // Attach the element to the DOM
    ref?.current && ref.current.appendChild(ml);

    const originalAst = JSON.parse(ml.getValue('math-json'));

    setInputTreeForm(originalAst, ml.value);

    console.log('value test', ml.value);

    const paths = calcInputPaths(originalAst);

    ml.addEventListener('input', () => {
      const newInputFormula = ml.getValue().replaceAll('⬚', '');
      const newInputTree = JSON.parse(ml.getValue('math-json'));

      const prevValues = inputTreeRef.current ? findAllMathTreeValues(inputTreeRef.current, paths) : [];
      const newValues = findAllMathTreeValues(newInputTree, paths);

      const legalPlaceholdersUnchanged: boolean = prevValues.every((v) => newValues.includes(v)) && newValues.every((v) => prevValues.includes(v));

      const removeMissing = (values: string[]): (string | undefined)[] => values.map((v) => (v !== 'Missing' ? v : undefined));

      // Input validation protected onChange callback.
      if (legalPlaceholdersUnchanged) {
        ml.value = inputFormulaRef.current;
      } else if (!newValues.every((v) => isLegalValue(v))) {
        let i = 0;

        const cleanedFormula = insertInitialValues(formula, initialValues).replaceAll('\\placeholder{}', (placeholderStr) =>
          isLegalValue(newValues[i++]) && newValues[i - 1] !== 'Missing' ? newValues[i - 1] : placeholderStr
        );

        /* TODO: Allow user to input the character '-'
        const prefixMinusFormula = inputFormulaRef.current.replaceAll('\\placeholder{}', (placeholderStr, offset) => {
          if (newInputFormula[offset] === '-') return '-\\placeholder{}';
          return placeholderStr;
        });
         */

        ml.value = cleanedFormula;

        ml.executeCommand('moveToNextPlaceholder'); // bugs if you enter last and deletes last.

        const cleanedTree = JSON.parse(ml.getValue('math-json'));

        setInputTreeForm(cleanedTree, cleanedFormula);

        onChange && onChange(removeMissing(findAllMathTreeValues(cleanedTree, paths)));
      } else {
        setInputTreeForm(newInputTree, newInputFormula);
        console.log(removeMissing(newValues));
        onChange && onChange(removeMissing(newValues));
      }
    });
  }, [ref, formula]);

  /*
  useEffect(() => {
    a && inputTreeRef.current && setInputTreeForm(inputTreeRef.current, 'f(x)=2');
  }, [a]);
   */

  return <div ref={ref} className={`${className} ${styles.container}`} />;
};
export default MathLive;

const calcInputPaths = (tree: IInputTree): number[][] => {
  let paths: number[][] = [];

  tree.forEach((value, index: number) => {
    if (value === 'Missing') paths = [...paths, [index]];
    else if (Array.isArray(value)) paths = [...paths, ...calcInputPaths(value).map((arr) => [index, ...arr])];
  });

  return paths;
};

const findMathTreeValue = (tree: IInputTree, path: number[]): string => {
  const restTree = tree[path?.[0]] ?? tree;
  const restPath = path.slice(1);
  if (restPath.length === 0) return restTree?.['num'] ?? restTree; // node that holds the value
  return findMathTreeValue(restTree as IInputTree, restPath);
};

const findAllMathTreeValues = (tree: IInputTree, paths: number[][]): string[] => paths.map((path) => findMathTreeValue(tree, path));

const isLegalValue = (v: string) => Number.isFinite(Number(v)) || v === 'Missing';

const insertInitialValues = (formula: string, initialValues: string[]): string => {
  let counter = 0;
  return formula.replaceAll('\\placeholder{}', (placeholderStr) => (initialValues[counter++] !== '' && initialValues[counter - 1] ? initialValues[counter - 1] : placeholderStr));
};

import React, { useState, useEffect, useRef } from 'react';
import * as Mathlive from 'mathlive';
import styles from './math-live.module.css';

type IProps = {
  formula: string;
  onChange?: (values: (string | undefined)[]) => void;
  className?: string;
};

type IInputTree = (string | { num: string } | IInputTree)[];

const MathLive: React.FC<IProps> = ({ formula, onChange, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inputTree, _setInputTree] = useState<IInputTree>();
  const [inputFormula, _setInputFormula] = useState(formula);
  const inputTreeRef = useRef(inputTree);
  const inputFormulaRef = useRef(inputFormula);

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

    // Attach the element to the DOM
    ref?.current && ref.current.appendChild(ml);

    const originalAst = JSON.parse(ml.getValue('math-json'));

    setInputTreeForm(originalAst, formula);

    const paths = calcInputPaths(originalAst);

    ml.addEventListener('input', () => {
      const newInputFormula = ml.getValue('latex');
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

        const cleanedFormula = formula.replaceAll('\\placeholder{}', (placeholderStr) => (isLegalValue(newValues[i++]) && newValues[i - 1] !== 'Missing' ? newValues[i - 1] : placeholderStr));

        ml.value = cleanedFormula;

        ml.executeCommand('moveToNextPlaceholder'); // bugs if you enter last and deletes last.

        const cleanedTree = JSON.parse(ml.getValue('math-json'));

        setInputTreeForm(cleanedTree, cleanedFormula);

        onChange && onChange(removeMissing(findAllMathTreeValues(cleanedTree, paths)));
      } else {
        setInputTreeForm(newInputTree, newInputFormula);
        onChange && onChange(removeMissing(newValues));
      }
    });
  }, [ref, formula]);

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

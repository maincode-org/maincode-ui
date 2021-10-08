import React, { useState, useEffect, useRef } from 'react';
import * as Mathlive from 'mathlive';
import styles from './math-live.module.css';

type IProps = {
  formula: string;
  onChange: (s: string) => void;
  className?: string;
};

type IInputTree = (string | { num: string } | IInputTree)[];

const MathLive: React.FC<IProps> = ({ formula, className = '' }) => {
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

      const isLegalValue = (v: string) => Number.isFinite(Number(v)) || v === 'Missing';

      console.log('legal place', !legalPlaceholdersUnchanged);
      console.log(
        'legal nums',
        newValues.every((v) => isLegalValue(v))
      );

      if (legalPlaceholdersUnchanged) {
        ml.value = inputFormulaRef.current;
      } else if (!newValues.every((v) => isLegalValue(v))) {
        let i = 0;
        const newFormula = formula.replaceAll('\\placeholder{}', (m, o, w) => {
          console.log(m, w, o);
          i++;
          return isLegalValue(newValues[i - 1]) && newValues[i - 1] !== 'Missing' ? newValues[i - 1] : m;
        });
        console.log('test', newFormula);

        // newValues.forEach((v) => (newFormula = newFormula.replace('\\placeholder{}', isLegalValue(v) ? v : v)));

        ml.value = newFormula;
        const adjustedValues = JSON.parse(ml.getValue('math-json'));
        setInputTreeForm(adjustedValues, newFormula);
        // TODO callback
        console.log('set input tree2', adjustedValues);
      } else {
        console.log('set input tree', newValues);
        setInputTreeForm(newInputTree, newInputFormula);
        // TODO onChange
      }
    });
  }, [ref, formula]);

  return <div ref={ref} className={`${className} ${styles.container}`} />;
};
export default MathLive;

const calcInputPaths = (tree: IInputTree): number[][] => {
  let paths: number[][] = [];

  tree.forEach((value, index: number) => {
    if (value === 'Missing') {
      paths = [...paths, [index]];
    } else if (Array.isArray(value)) {
      paths = [...paths, ...calcInputPaths(value).map((arr) => [index, ...arr])];
    }
  });

  return paths;
};

const findMathTreeValue = (tree: IInputTree, path: number[]): string => {
  const restTree = tree[path?.[0]] ?? tree ?? 'Elevated';
  const restPath = path.slice(1);
  if (restPath.length === 0) return restTree?.['num'] ?? restTree; // node that holds the value
  return findMathTreeValue(restTree as IInputTree, restPath);
};

const findAllMathTreeValues = (tree: IInputTree, paths: number[][]): string[] => paths.map((path) => findMathTreeValue(tree, path));

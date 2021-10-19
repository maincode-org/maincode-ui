import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as Mathlive from 'mathlive';
import styles from './math-live.module.css';
import _ from 'lodash';

type IAnswerValue = {
  value: string;
  shouldReveal: boolean;
};

type IProps = {
  formula: string;
  onChange?: (values: (string | undefined)[]) => void;
  answerValues?: IAnswerValue[];
  className?: string;
};

type IInputTree = (string | { num: string } | IInputTree)[];

const MathLive: React.FC<IProps> = ({ formula, onChange, answerValues = [], className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const ml = useMemo(() => new Mathlive.MathfieldElement(), []);

  const [inputTree, _setInputTree] = useState<IInputTree>();
  const [inputFormula, _setInputFormula] = useState(formula);

  const [latestAnswerValues, _setLatestAnswerValues] = useState<IAnswerValue[]>(answerValues);
  const inputTreeRef = useRef(inputTree);
  const inputFormulaRef = useRef(inputFormula);
  const onChangeRef = useRef(onChange);
  const latestAnswerValuesRef = useRef(answerValues);

  /** The DOM event handler of the input field cannot see changes in states. It can however access the current values of refs.*/
  const setInputTreeForm = (tree: IInputTree, formula: string) => {
    inputTreeRef.current = tree;
    inputFormulaRef.current = formula;
    _setInputFormula(formula);
    _setInputTree(tree);
  };

  /** Set a reference to the latest created onchange function (its "re-created" on every render, see useCallback React Docs). */
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (_.isEqual(latestAnswerValues, answerValues)) return;
    _setLatestAnswerValues(answerValues);
    latestAnswerValuesRef.current = answerValues;
    if (answerValues && answerValues.length > 0) ml.value = insertAnswerValues(formula, answerValues);
  }, [answerValues]);

  /** First meaningful load */
  useEffect(() => {
    if (!ref) return;

    ml.setOptions({ virtualKeyboardMode: 'off' });
    ml.value = formula;

    // Attach the element to the DOM
    ref?.current && ref.current.appendChild(ml);

    // Add initial values
    if (answerValues && answerValues.length > 0) ml.value = insertAnswerValues(formula, answerValues);

    // Get AST and calculate paths
    const originalAst = JSON.parse(ml.getValue('math-json'));
    setInputTreeForm(originalAst, ml.value);
    const paths = calcInputPaths(originalAst);

    ml.addEventListener('input', () => {
      const newInputFormula = ml.getValue().replaceAll('⬚', '');
      const newInputTree = JSON.parse(ml.getValue('math-json'));

      const prevValues = inputTreeRef.current ? findAllMathTreeValues(inputTreeRef.current, paths) : [];
      const newValues = findAllMathTreeValues(newInputTree, paths);

      const legalPlaceholdersUnchanged: boolean = prevValues.every((v) => newValues.includes(v)) && newValues.every((v) => prevValues.includes(v));

      console.log('NEW VALUES -----------------------------', newValues);
      // Input validation protected onChange callback.
      if (legalPlaceholdersUnchanged) {
        ml.value = inputFormulaRef.current;
      } else if (newValues.some((v, i) => latestAnswerValuesRef.current[i]?.shouldReveal && v !== latestAnswerValuesRef.current[i]?.value)) {
        console.log('You tried to change a revealed value!!!!!!');
        ml.value = inputFormulaRef.current;
      } else if (!newValues.every((v) => isLegalValue(v))) {
        let counter = 0;

        console.log('insertAnswerValues gave ', insertAnswerValues(formula, latestAnswerValuesRef.current));
        const cleanedFormula = insertAnswerValues(formula, latestAnswerValuesRef.current).replaceAll('\\placeholder{}', (placeholderStr) => {
          const i = counter++;
          console.log('Found a placeholder at', i);
          if (isLegalValue(newValues[i]) && newValues[i] !== 'Missing' && !latestAnswerValuesRef.current[i].shouldReveal) {
            return newValues[i];
          } else if (latestAnswerValuesRef.current[i - 1]?.shouldReveal) {
            return latestAnswerValuesRef.current[i - 1].value;
          } else {
            return placeholderStr;
          }
        });

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

        onChangeRef.current && onChangeRef.current(removeMissing(findAllMathTreeValues(cleanedTree, paths)));
      } else {
        setInputTreeForm(newInputTree, newInputFormula);
        onChangeRef.current && onChangeRef.current(removeMissing(newValues));
      }
    });
  }, [ref]);

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

const insertAnswerValues = (formula: string, answerValues: IAnswerValue[]): string => {
  let counter = 0;
  console.log('Insert answer values recieved answer values: ', answerValues);
  return formula.replaceAll('\\placeholder{}', (placeholderStr) => {
    const i = counter++;
    if (answerValues[i].shouldReveal) {
      return answerValues[i].value;
    } else if (Number(answerValues[i].value) < 0) {
      return `-${placeholderStr}`;
    } else {
      console.log('Answer value ', answerValues[i], 'at ', i, ' is not revealed. Inserting placeholder.');
      return placeholderStr;
    }
  });
};

const removeMissing = (values: string[]): (string | undefined)[] => values.map((v) => (v !== 'Missing' ? v : undefined));

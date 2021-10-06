import React, { useEffect, useRef } from 'react';
import * as Mathlive from 'mathlive';
import styles from './math-live.module.css';

type IProps = {
  formula: string;
  onChange: (s: string) => void;
  className?: string;
};

const MathLive: React.FC<IProps> = ({ formula, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref) return;
    const ml = new Mathlive.MathfieldElement();
    ml.value = formula;

    ml.setOptions({
      virtualKeyboardMode: 'manual',
    });

    // Attach the element to the DOM
    ref?.current && ref.current.appendChild(ml);

    const originalAst = JSON.parse(ml.getValue('math-json'));
    console.log(originalAst);

    ml.addEventListener('input', () => {
      const val = ml.getValue('math-json');
      let isLegal = true;
      console.log(val);

      const expressionTree = JSON.parse(val);

      if (expressionTree?.[1] !== originalAst?.[1]) {
        console.log('Lefthand side what changed');
        isLegal = false;
      }

      const traverseSubTree = (subTree: any[]): number[][] => {
        let missingArr: number[][] = [];

        subTree.forEach((value: any, index: number) => {
          if (value === 'Missing') {
            missingArr = [...missingArr, [index]];
          } else if (Array.isArray(value)) {
            missingArr = [...missingArr, ...traverseSubTree(value).map((arr) => [index, ...arr])];
          }
        });

        return missingArr;
      };

      const traverseExpressionTree = (tree: any[]) => {
        console.log(tree);
        for (const key of Object.keys(tree)) {
          if (Array.isArray(tree?.[key])) {
            console.log('New top level', key);
            console.log(traverseSubTree(tree?.[key]));
          }
          if (tree?.[key] === 'Missing') console.log('I found outer missing - top level');
        }
      };

      traverseExpressionTree(expressionTree);

      // Find indexes by traversals (when prop formula change, make array of getters for inputs)
      const getInputAtFirstPos = (tree: any) => tree?.[2]?.[1]?.[1];
      const getLenAtFirstPos = (tree: any) => tree?.[2]?.[1]?.length;

      const aInput = getInputAtFirstPos(expressionTree);
      const aInputLen = getLenAtFirstPos(expressionTree);

      if (aInputLen !== getLenAtFirstPos(originalAst)) {
        console.log('Tree structure changed around input a');
        isLegal = false;
      }

      // console.log(aInput);

      // Guards for changed tree structure at input as position
      if (Array.isArray(aInput)) {
        console.log('Tree structure has changed within input a');
        isLegal = false;
      }

      if (aInput === getInputAtFirstPos(originalAst)) {
        console.log('Whatever changed was not input a');
        isLegal = false;
      }

      if (!isLegal) ml.value = formula; // todo replace formula with previous value
    });

    // newInput is o.k if newInputAsJson.replace(lastInputtedChar, "Missing") === originalFormulaAsJson
  }, [ref]);

  return <div ref={ref} className={`${className} ${styles.container}`} />;
};
export default MathLive;

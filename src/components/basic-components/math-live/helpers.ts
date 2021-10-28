import { IInputTree, IAnswerValue } from './MathLive';

export const calcInputPaths = (tree: IInputTree): number[][] => {
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

export const findAllMathTreeValues = (tree: IInputTree, paths: number[][]): string[] => paths.map((path) => findMathTreeValue(tree, path));

export const isLegalValue = (v: string | undefined): boolean => v !== undefined && (Number.isFinite(Number(v)) || v === 'Missing');

export const initAnswerValues = (formula: string, answerValues: IAnswerValue[], currentValues?: string[]): string => {
  let counter = 0;
  return formula.replaceAll('\\placeholder{}', (placeholderStr) => {
    const i = counter++;

    if (i > answerValues.length - 1) return placeholderStr;

    if (isLegalValue(currentValues?.[i])) return placeholderStr;

    if (answerValues[i].shouldReveal) {
      return answerValues[i].value;
    } else if (Number(answerValues[i].value) < 0 && !isLegalValue(currentValues?.[i])) {
      return `-${placeholderStr}`;
    } else {
      return placeholderStr;
    }
  });
};

export const removeMissing = (values: string[]): (string | undefined)[] => values.map((v) => (v !== 'Missing' ? v : undefined));

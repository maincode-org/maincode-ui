/* Math function types */
export type ILinearFn = (a: number, b: number) => (x: number) => number;
export type IExponentialFn = (a: number, b: number) => (x: number) => number;
export type IParabolaFn = (a: number, b: number, c: number) => (x: number) => number;
export type IThrowParabolaFn = (a: number, c: number) => (x: number) => number;

export enum EMathFunctions {
  LINEAR = 'linear',
  EXPONENTIAL = 'exponential',
  PARABOLA = 'parabola',
  THROWPARABOLA = 'throwparabola',
}

/* ------------ Math functions ------------ */
export const linearFunction =
  (a: number, b: number) =>
  (x: number): number =>
    a * x + b;

export const exponentialFunction =
  (a: number, b: number) =>
  (x: number): number =>
    a * Math.pow(b, x);

export const parabolaFunction =
  (a: number, b: number, c: number) =>
  (x: number): number =>
    a * x * x + b * x + c;

export const throwParabolaFunction =
  (a: number, c: number) =>
  (x: number): number =>
    a * x * x + x + c;
/* ------------------------------------------ */

/** Solving quadratic equations with complete square algorithm
 * https://en.wikipedia.org/wiki/Quadratic_equation
 * ax^2 + x + c = y
 * 1:  x^2 + b / a * x + c/a = y/a
 * 2:  x^2 + b / a * x = y/a - c/a
 * 3:  x^2 + b / a * x + (b / a) / 2 = y/a - c/a + (b / a) / 2
 * 4:  (x + (b / a) / 2)^2 = y/a - c/a + (b / a) / 2
 * 5:  x + (b / a) / 2 = sqrt(y/a - c/a + (b / a) / 2)
 * 6:  x = - (b / a) / 2 +- sqrt(y/a - c/a + (b / a) / 2)
 */
export const solveQuadraticFn = (a: number, b: number, c: number, y: number): number => {
  return -(b / a / 2) - Math.sqrt(y / a - c / a + b / a / 2);
};

/* Numeric method to calculate f(x) = 0
const numMethod = (fn: (x: number) => number): number => {
  let correctX = 0;
  let x = 0;
  const stepSize = 0.00001;

  while ((fn(x) > stepSize || fn(x) < -stepSize) && (fn(-x) < -stepSize || fn(-x) > stepSize)) {
    x += stepSize;
    correctX = x;
  }

  const numericAnswer = fn(correctX) === 0 ? correctX : -correctX;

  return Math.round((numericAnswer + Number.EPSILON) * 1000) / 1000;
};
 */

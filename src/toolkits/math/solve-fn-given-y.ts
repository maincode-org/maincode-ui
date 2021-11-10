import { IExponentialParams, ILinearParams, IParabolaParams } from './index';

/** Solving linear equation: y=a*x+b -> (y - b) / a */
export const solveFnGivenYLinear = (fnParams: ILinearParams, y: number): number => (y - fnParams.b) / fnParams.a;

/** Solving exponential equation: y=a*b^x -> log(y/a) / log(b) = x */
export const solveFnGivenYExponential = (fnParams: IExponentialParams, y: number): number => {
  const { a, b } = fnParams;

  if (a === 0) return 0;

  const n1 = y / a;

  if (n1 < 0 || n1 === 0 || n1 === 1 || b < 0 || b === 0 || b === 1) return 0;

  return Math.log(n1) / Math.log(b);
};

/** Solving quadratic equations with complete square algorithm
 * https://en.wikipedia.org/wiki/Quadratic_equation
 * ax^2 + x + c = y
 * 1:  x^2 + b / a * x + c/a = y/a
 * 2:  x^2 + b / a * x = y/a - c/a
 * 3:  x^2 + b / a * x + (b / a) / 2 = y/a - c/a + (b / a) / 2
 * 4:  (x + (b / a) / 2)^2 = y/a - c/a + (b / a) / 2
 * 5:  x + (b / a) / 2 = sqrt(y/a - c/a + (b / a) / 2)
 * 6:  x = - (b / a) / 2 +- sqrt(y/a - c/a + (b / a) / 2)
 * Final code is: return -(b / a / 2) - Math.sqrt(y / a - c / a + b / a / 2); with sqrt content >= 0.
 */
export const solveFnGivenYParabola = (fnParams: IParabolaParams, y: number): number => {
  const { a, b, c } = fnParams;
  const n1 = -(b / a) / 2;
  const n2 = y / a - c / a + b / a / 2;

  if (n2 <= 0) return 0;

  return n1 - Math.sqrt(n2);
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

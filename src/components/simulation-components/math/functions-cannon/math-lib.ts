/* Math function types */
export type ILinearFn = (a: number, b: number) => (x: number) => number;
export type IExponentialFn = (a: number, b: number) => (x: number) => number;
export type IParabolaFn = (a: number, b: number, c: number) => (x: number) => number;
export type IThrowParabolaFn = (a: number, c: number) => (x: number) => number;

/* Math functions */
export const linearFunction = (a: number, b: number) => (x: number) => a * x + b;
export const exponentialFunction = (a: number, b: number) => (x: number) => a * Math.pow(b, x);
export const parabolaFunction = (a: number, b: number, c: number) => (x: number) => a * x * x + b * x + c;
export const throwParabolaFunction = (a: number, c: number) => (x: number) => a * x * x + x + c;

export enum EMathFunctions {
  LINEAR = 'linear',
  EXPONENTIAL = 'exponential',
  PARABOLA = 'parabola',
  THROWPARABOLA = 'throwparabola',
}

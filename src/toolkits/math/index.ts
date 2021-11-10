import { solveFnGivenYLinear, solveFnGivenYExponential, solveFnGivenYParabola } from './solve-fn-given-y';
import { makeLinearFn, makeExponentialFn, makeThrowParabolaFn, makeParabolaFn } from './make-higher-order-fn';

/* Equation parameters */
export type ILinearParams = { a: number; b: number };
export type IExponentialParams = { a: number; b: number };
export type IThrowParabolaParams = { a: number; c: number };
export type IParabolaParams = { a: number; b: number; c: number };

/* Math function types */
export type ILinearFn = (params: ILinearParams) => (x: number) => number;
export type IExponentialFn = (params: IExponentialParams) => (x: number) => number;
export type IParabolaFn = (params: IParabolaParams) => (x: number) => number;
export type IThrowParabolaFn = (params: IThrowParabolaParams) => (x: number) => number;

enum EMathFunctions {
  LINEAR = 'linear',
  EXPONENTIAL = 'exponential',
  PARABOLA = 'parabola',
  THROWPARABOLA = 'throwparabola',
}

export const MathToolkit = {
  EEquations: EMathFunctions,
  linear: {
    makeFn: makeLinearFn,
    solveFnGivenY: solveFnGivenYLinear,
  },
  exponential: {
    makeFn: makeExponentialFn,
    solveFnGivenY: solveFnGivenYExponential,
  },
  parabola: {
    throw: {
      makeFn: makeThrowParabolaFn,
    },
    makeFn: makeParabolaFn,
    solveFnGivenY: solveFnGivenYParabola,
  },
};

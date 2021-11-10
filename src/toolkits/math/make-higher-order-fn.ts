import { IExponentialFn, IExponentialParams, ILinearFn, ILinearParams, IParabolaFn, IParabolaParams, IThrowParabolaFn, IThrowParabolaParams } from './index';

export const makeLinearFn: ILinearFn =
  (params: ILinearParams) =>
  (x: number): number =>
    params.a * x + params.b;

export const makeExponentialFn: IExponentialFn =
  (params: IExponentialParams) =>
  (x: number): number =>
    params.a * Math.pow(params.b, x);

export const makeParabolaFn: IParabolaFn =
  (params: IParabolaParams) =>
  (x: number): number =>
    params.a * x * x + params.b * x + params.c;

export const makeThrowParabolaFn: IThrowParabolaFn =
  (params: IThrowParabolaParams) =>
  (x: number): number =>
    params.a * x * x + x + params.c;

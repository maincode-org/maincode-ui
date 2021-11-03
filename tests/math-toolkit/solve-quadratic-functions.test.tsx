import { solveQuadraticFn } from '../../src/components/simulation-components/math/math-lib';

const format2digits = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

describe('Solve quadratic function helper', () => {
  it('Calculates throw parabola correctly - negative A', () => {
    expect(solveQuadraticFn(-2, 1, 1, 1)).toBe(0);
  });

  it('Calculates throw parabola correctly - negative A > -1', () => {
    expect(format2digits(solveQuadraticFn(-0.3, 1, 3, -0.5))).toEqual(-1.5);
  });

  it('Calculates throw parabola correctly - negative A < -1', () => {
    expect(format2digits(solveQuadraticFn(-1.3, 1, 4, -0.5))).toEqual(-1.37);
  });

  it('Calculates throw parabola correctly - positive A < 1', () => {
    expect(format2digits(solveQuadraticFn(0.3, 1, 4, 1200))).toEqual(-64.82);
  });

  it('Calculates throw parabola correctly - positive A > 1', () => {
    expect(format2digits(solveQuadraticFn(1.1, 1, 1, 1))).toEqual(-1.13);
  });
});

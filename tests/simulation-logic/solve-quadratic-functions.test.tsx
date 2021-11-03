import { solveQuadraticFn } from '../../src/components/simulation-components/math/math-lib';

describe('Solve quadratic function helper', () => {
  it('Calculates throw parabola correctly - negative A', () => {
    expect(solveQuadraticFn(-2, 1, 1, 1)).toBe(0);
  });

  it('Calculates throw parabola correctly - negative A', () => {
    expect(solveQuadraticFn(-0.2, 1, 3, -0.5).toFixed(2)).toBe(-2.37);
  });

  it('Calculates throw parabola correctly - negative A', () => {
    expect(solveQuadraticFn(-0.3, 1, 4, -0.5).toFixed(2)).toBe(-2.55);
  });

  it('Calculates throw parabola correctly - positive A', () => {
    expect(solveQuadraticFn(0.3, 1, 4, 10).toFixed(2)).toBe(-6.44);
  });

  it('Calculates throw parabola correctly - positive A', () => {
    expect(solveQuadraticFn(1, 1, 1, 1).toFixed(2)).toBe(-1);
  });
});

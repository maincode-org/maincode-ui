import { MathToolkit } from '../../toolkits/math';

const { solveFnGivenY } = MathToolkit.parabola;

const format2digits = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

describe('Solve quadratic function helper', () => {
  it('Calculates throw parabola correctly - negative A', () => {
    expect(solveFnGivenY({ a: -2, b: 1, c: 1 }, 1)).toEqual(0);
  });

  it('Calculates throw parabola correctly - negative A > -1', () => {
    expect(format2digits(solveFnGivenY({ a: -0.3, b: 1, c: 3 }, -0.5))).toEqual(-1.5);
  });

  it('Calculates throw parabola correctly - negative A < -1', () => {
    expect(format2digits(solveFnGivenY({ a: -1.3, b: 1, c: 4 }, -0.5))).toEqual(-1.37);
  });

  it('Calculates throw parabola correctly - positive A < 1', () => {
    expect(format2digits(solveFnGivenY({ a: 0.3, b: 1, c: 4 }, 1200))).toEqual(-64.82);
  });

  it('Calculates throw parabola correctly - positive A > 1', () => {
    expect(format2digits(solveFnGivenY({ a: 1.1, b: 1, c: 1 }, 1))).toEqual(-1.13);
  });
});

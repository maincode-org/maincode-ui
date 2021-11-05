import { MathToolkit } from '../../src/toolkits/math';

const { solveFnGivenY } = MathToolkit.exponential;

const format2digits = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

describe('Solve exponential function helper', () => {
  it('Calculates exponential function correctly - positive a', () => {
    expect(format2digits(solveFnGivenY({ a: 1.1, b: 2 }, 1))).toEqual(-0.14);
  });

  it('Calculates exponential function correctly - negative a', () => {
    expect(format2digits(solveFnGivenY({ a: -1.1, b: 2 }, -1))).toEqual(-0.14);
  });

  it('Calculates exponential function correctly - b is 0 returns 0', () => {
    expect(solveFnGivenY({ a: -1.1, b: 0 }, -1)).toEqual(0);
  });

  it('Calculates exponential function correctly - b is 1 returns 0', () => {
    expect(solveFnGivenY({ a: -1.1, b: 1 }, -1)).toEqual(0);
  });
});

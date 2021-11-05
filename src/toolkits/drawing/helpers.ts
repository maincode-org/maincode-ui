import { ICoord, IPlotConfig, IPoint } from '../../components/simulation-components/math/types';

export const shouldRoundAxisValues = (numberOfDashes: number, fromValue: number, stepValue: number): boolean => {
  const values = Array.from(Array(numberOfDashes).keys()).map((i) => fromValue + i * stepValue);
  return values.every((num) => num % 1 === 0);
};

export const enhanceCanvasQuality = (canvas: HTMLCanvasElement, simulationSize: number, wPct: number, hPct: number): CanvasRenderingContext2D => {
  const ratio = window.devicePixelRatio;
  const wPx = (wPct / 100) * simulationSize + simulationSize * 0.01;
  const hPx = (hPct / 100) * simulationSize + simulationSize * 0.01;
  canvas.width = wPx * ratio;
  canvas.height = hPx * ratio;
  canvas.style.width = wPx + 'px';
  canvas.style.height = hPx + 'px';
  const context = canvas.getContext('2d');
  if (!context) throw 'Failed to getContext of canvas';
  context.scale(ratio, ratio);
  return context;
};

export const coordToPoint = (coord: ICoord, plot: IPlotConfig): IPoint => {
  const { axis, stepValue, stepWidth, offset, canvasHeight } = plot;

  /** The reciprocal (1/..) indicates the number of steps between a full value. Eg. step value 0.5 => 2 steps between each value. */
  const xSteps = coord.x * stepWidth.x * (1 / stepValue.x);
  const xFromOffset = axis.x.from * (1 / stepValue.x) * stepWidth.x;
  const x = offset.left + xSteps - xFromOffset;

  const ySteps = coord.y * stepWidth.y * (1 / stepValue.y);
  const yFromOffset = axis.y.from * (1 / stepValue.y) * stepWidth.y;
  const y = canvasHeight - (offset.bottom + ySteps) + yFromOffset;

  const isInPlotView = coord.x >= axis.x.from && coord.x <= axis.x.to && coord.y >= axis.y.from && coord.y <= axis.y.to;

  return { x, y, isInPlotView };
};

export const translateYPoint = (plot: IPlotConfig, y: number): number => {
  const scaledStepWidth = plot.stepWidth.y / plot.stepValue.y;
  return plot.canvasHeight - (plot.offset.bottom + (y - plot.axis.y.from) * scaledStepWidth);
};

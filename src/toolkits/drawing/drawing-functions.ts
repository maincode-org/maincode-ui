import { ICoord, IPlotConfig, IAxisOptions } from '../../components/simulation-components/math/types';
import { shouldRoundAxisValues, coordToPoint, translateYPoint } from './helpers';

export type IDrawPlotArgs = {
  context: CanvasRenderingContext2D;
  axisOptions: IAxisOptions;
  isDarkMode: boolean;
  axisColor?: { light: string; dark: string };
  textColor?: { light: string; dark: string };
};

export const drawPlot = (args: IDrawPlotArgs): IPlotConfig => {
  const { context, axisOptions, isDarkMode, axisColor, textColor } = args;

  const ratio = window.devicePixelRatio;
  const canvasWidth = context.canvas.width / ratio;
  const canvasHeight = context.canvas.height / ratio;

  // Font settings and helpers
  const fontSize = 20;
  context.font = `${fontSize}px Roboto`;

  const textWidth = (text: string): number => context.measureText(text).width;
  const textHeight = (text: string): number => context.measureText(text).actualBoundingBoxAscent;
  const textPadding = textHeight('1');

  const textWidthCenter = (text: string): number => textWidth(text) / 2;
  const textHeightCenter = (text: string): number => textHeight(text) / 2;

  const pointDashSize = 10;
  const xNumberOfDashes = axisOptions.x.numberOfDashes ?? 10;
  const yNumberOfDashes = axisOptions.y.numberOfDashes ?? 10;

  // Axis settings and helpers
  const xStepValue = (axisOptions.x.to - axisOptions.x.from) / xNumberOfDashes;
  const yStepValue = (axisOptions.y.to - axisOptions.y.from) / yNumberOfDashes;

  const shouldRoundX = shouldRoundAxisValues(xNumberOfDashes, axisOptions.x.from, xStepValue);
  const shouldRoundY = shouldRoundAxisValues(yNumberOfDashes, axisOptions.y.from, yStepValue);
  const yRoundPadding = !shouldRoundY ? textWidth('.4') : 0;

  const offset = {
    top: textHeight('Y') * 2,
    right: textWidthCenter(`${axisOptions.x.to}`) > textWidth('X') * 1.25 ? textWidthCenter(`${axisOptions.x.to}`) : textWidth('X') * 2,
    bottom: textHeight(`${axisOptions.x.to}`) * 2.5,
    left: textWidth(`${axisOptions.y.to}`) + textPadding + yRoundPadding,
  };

  const xStepWidth = (canvasWidth - offset.right - offset.left) / xNumberOfDashes;
  const yStepWidth = (canvasHeight - offset.top - offset.bottom) / yNumberOfDashes;

  context.strokeStyle = !axisColor ? '#000000' : isDarkMode ? axisColor.dark : axisColor.light;
  context.fillStyle = !textColor ? '#000000' : isDarkMode ? textColor.dark : textColor.light;
  context.lineWidth = 2;

  // y-axis
  context.moveTo(offset.left, offset.top);
  context.lineTo(offset.left, canvasHeight - offset.bottom);
  context.fillText('Y', offset.left - textWidthCenter('Y'), offset.top - textHeightCenter('Y'));

  // x-axis
  context.moveTo(offset.left, canvasHeight - offset.bottom);
  context.lineTo(canvasWidth - offset.right, canvasHeight - offset.bottom);
  context.fillText('X', canvasWidth - offset.right + textWidthCenter('X'), canvasHeight - offset.bottom + textHeightCenter('X'));

  // Draw x-axis details and ranges
  for (let i = 0; i <= xNumberOfDashes; i++) {
    const xAxisPoint = offset.left + xStepWidth * i;

    if (i !== 0) {
      context.moveTo(xAxisPoint, canvasHeight - offset.bottom + pointDashSize / 2);
      context.lineTo(xAxisPoint, canvasHeight - offset.bottom - pointDashSize / 2);
    }

    const stepDisplayNumber = axisOptions.x.from + i * xStepValue;
    const stepText = `${shouldRoundX ? Math.round(stepDisplayNumber) : stepDisplayNumber.toFixed(1)}`;
    context.fillText(stepText, xAxisPoint - textWidthCenter(stepText), canvasHeight - textHeightCenter(stepText));
  }

  // Draw y-axis details and ranges
  context.textAlign = 'right';
  for (let i = 0; i <= yNumberOfDashes; i++) {
    const yAxisPoint = canvasHeight - offset.bottom - yStepWidth * i;

    if (i !== 0) {
      context.moveTo(offset.left + pointDashSize / 2, yAxisPoint);
      context.lineTo(offset.left - pointDashSize / 2, yAxisPoint);
    }

    const stepDisplayNumber = axisOptions.y.from + i * yStepValue;
    const stepText = `${shouldRoundY ? Math.round(stepDisplayNumber) : stepDisplayNumber.toFixed(1)}`;
    context.fillText(stepText, offset.left - pointDashSize / 2 - textPadding / 2, yAxisPoint + textHeightCenter(stepText));
  }

  context.textAlign = 'left';
  context.stroke(); // Draws the axis' with numbers and details

  return {
    canvasWidth,
    canvasHeight,
    fontSize,
    offset,
    axis: axisOptions,
    numberOfDashes: { x: xNumberOfDashes, y: yNumberOfDashes },
    stepWidth: { x: xStepWidth, y: yStepWidth },
    stepValue: { x: xStepValue, y: yStepValue },
  };
};

export type IDrawPlotPointArgs = {
  plot: IPlotConfig;
  coord: ICoord;
  context: CanvasRenderingContext2D;
};

export const drawPlotPoint = (args: IDrawPlotPointArgs): void => {
  const { plot, coord, context } = args;

  const point = coordToPoint(coord, plot);
  if (!point.isInPlotView) return;

  context.beginPath();
  context.arc(point.x, point.y, 6, 0, 2 * Math.PI);
  context.fill();
};

export type IDrawPlotPointsArgs = {
  plot: IPlotConfig;
  coords: ICoord[];
  context: CanvasRenderingContext2D;
};

export const drawPlotPoints = (args: IDrawPlotPointsArgs): void => {
  const { plot, coords, context } = args;
  coords.forEach((c) => drawPlotPoint({ plot: plot, coord: c, context: context }));
};

export type IDrawFunctionArgs = {
  plot: IPlotConfig;
  fn: (x: number) => number;
  context: CanvasRenderingContext2D;
  color?: string;
};
export const drawFunction = (args: IDrawFunctionArgs): void => {
  const { plot, fn, context, color } = args;
  context.beginPath();

  const stepSize = 0.01;

  for (let x = 0; x <= plot.canvasWidth - (plot.offset.left + plot.offset.right); x += stepSize) {
    if (fn(x) > plot.axis.y.to) continue; // Prevents top overdrawing.
    if (fn(x) < plot.axis.y.from) continue; // Prevents bottom overdrawing.
    if (x < plot.axis.x.from) continue; // Prevents left overdrawing.
    if (x > plot.axis.x.to) continue; // Prevents right overdrawing.
    context.lineTo((x - plot.axis.x.from) * (plot.stepWidth.x / plot.stepValue.x) + plot.offset.left, translateYPoint(plot, fn(x)));
  }

  context.strokeStyle = color ?? 'rgba(9,67,131,0.5)';

  context.stroke();
};

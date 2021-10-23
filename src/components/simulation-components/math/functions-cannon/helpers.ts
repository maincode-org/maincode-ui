export type IAxisOption = {
  from: number;
  to: number;
  label?: string;
  numberOfDashes?: number;
};

export type IAxisOptions = {
  x: IAxisOption;
  y: IAxisOption;
};

export type IPlotConfig = {
  canvasWidth: number;
  canvasHeight: number;
  fontSize: number;
  axis: IAxisOptions;
  offset: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  numberOfDashes: {
    x: number;
    y: number;
  };
  stepWidth: {
    x: number;
    y: number;
  };
  stepValue: {
    x: number;
    y: number;
  };
};

export const drawPlot = (context: CanvasRenderingContext2D, axisOptions: IAxisOptions, isDarkMode: boolean, axisColor?: { light: string; dark: string }): IPlotConfig => {
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
  context.fillStyle = !axisColor ? '#000000' : isDarkMode ? axisColor.dark : axisColor.light;
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

const shouldRoundAxisValues = (numberOfDashes: number, fromValue: number, stepValue: number): boolean => {
  const values = Array.from(Array(numberOfDashes).keys()).map((i) => fromValue + i * stepValue);
  return values.every((num) => num % 1 === 0);
};

export const initCannon = (cannon: SVGSVGElement, cannonBallPos: ICoord): void => {
  cannon.style.height = '15%';
  cannon.style.width = '15%';
  cannon.style.left = `calc(${cannonBallPos.x}px - 12%)`;
  cannon.style.bottom = `${cannonBallPos.y}px`;
  cannon.style.position = 'absolute';
  cannon.style.transform = 'rotateZ(30deg)';
};

export const initCannonBall = (cannonBall: HTMLElement): void => {
  cannonBall.style.position = 'absolute';
  cannonBall.style.bottom = '-2%';
  cannonBall.style.left = '-2%';
  cannonBall.style.background = 'black';
  cannonBall.style.width = '4%';
  cannonBall.style.height = '4%';
  cannonBall.style.borderRadius = '100%';
  cannonBall.style.visibility = 'hidden';
  cannonBall.style.zIndex = '2';
};

export const initTestSquare = (testSquare: HTMLDivElement, xPos: number, yPos: number): void => {
  testSquare.style.width = '5%';
  testSquare.style.height = '5%';
  testSquare.style.background = 'blue';
  testSquare.style.position = 'absolute';
  testSquare.style.left = `${xPos}px`;
  testSquare.style.bottom = `${yPos}px`;
  testSquare.style.display = 'none';
};

export const applyCannonWheelStyle = (cannonWheel: SVGSVGElement): void => {
  cannonWheel.style.transformBox = 'fill-box';
  cannonWheel.style.transformOrigin = 'center';
  cannonWheel.style.transform = 'translateX(30px)';
};

export const enhanceCanvasQuality = (canvas: HTMLCanvasElement, simulationSize: number, wPct: number, hPct: number): CanvasRenderingContext2D | null => {
  const ratio = window.devicePixelRatio;
  const wPx = (wPct / 100) * simulationSize + simulationSize * 0.01;
  const hPx = (hPct / 100) * simulationSize + simulationSize * 0.01;
  canvas.width = wPx * ratio;
  canvas.height = hPx * ratio;
  canvas.style.width = wPx + 'px';
  canvas.style.height = hPx + 'px';
  const context = canvas.getContext('2d');
  context?.scale(ratio, ratio);
  return context;
};

export type ICoord = {
  x: number;
  y: number;
};

export type IPoint = ICoord & { isInPlotView: boolean };

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

export const drawPlotPoint = (plot: IPlotConfig, coord: ICoord, context: CanvasRenderingContext2D): void => {
  const point = coordToPoint(coord, plot);
  if (!point.isInPlotView) return;

  context.beginPath();
  context.arc(point.x, point.y, 6, 0, 2 * Math.PI);
  context.fill();
};

export const drawPlotPoints = (plot: IPlotConfig, coords: ICoord[], context: CanvasRenderingContext2D): void => coords.forEach((c) => drawPlotPoint(plot, c, context));

export const translateYPoint = (plot: IPlotConfig, y: number): number => {
  const scaledStepWidth = plot.stepWidth.y / plot.stepValue.y;
  return plot.canvasHeight - (plot.offset.bottom + (y - plot.axis.y.from) * scaledStepWidth);
};

export const drawFunction = (plot: IPlotConfig, fn: (x: number) => number, context: CanvasRenderingContext2D, color?: string): void => {
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

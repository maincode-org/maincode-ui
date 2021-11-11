import { drawFunction, drawPlot, drawPlotPoint, drawPlotPoints, IDrawFunctionArgs, IDrawPlotArgs, IDrawPlotPointArgs, IDrawPlotPointsArgs } from './drawing-functions';
import { enhanceCanvasQuality } from './helpers';
import { ICoord, IPlotConfig } from '../../components/simulation-components/math/types';
import _ from 'lodash';

export const DrawingToolkit = {
  makeSimulation: (id: string): Simulation => new Simulation(id),
};

export type ITheme = {
  isDarkMode: boolean;
  plot: {
    axisColor: { light: string; dark: string };
  };
  canvas: {
    textColor: { light: string; dark: string };
  };
};

export enum EDrawing {
  PLOT = 'plot',
  FUNCTION = 'function',
  POINT = 'point',
}

type ISpawnCanvasArgs = {
  wPct: number;
  hPct: number;
  className?: string;
};

export class Simulation {
  private readonly simulationContainer!: HTMLElement;
  private canvas!: HTMLCanvasElement;
  private canvasContext!: CanvasRenderingContext2D;
  private canvasContents: Map<EDrawing, (() => void)[]> = new Map<EDrawing, (() => void)[]>();
  private plotConfig!: IPlotConfig;

  axisOptions = { x: { from: 0, to: 10 }, y: { from: 0, to: 10 } };

  private theme: ITheme = {
    isDarkMode: false,
    plot: { axisColor: { light: '#000000', dark: '#ffffff' } },
    canvas: { textColor: { light: '#000000', dark: '#ffffff' } },
  };

  constructor(containerId: string) {
    const sim = document.getElementById(containerId);
    if (!sim) throw `Container id="${containerId}" not found`;
    this.simulationContainer = sim;
  }

  getSimulation = (): HTMLElement => this.simulationContainer;

  getBottomToXAxis = (): number => {
    if (!this.plotConfig) throw 'Plot not found';

    return this.simulationContainer.clientHeight - (this.canvas.clientHeight - this.plotConfig.offset.bottom);
  };

  getLeftToYAxis = (): number => {
    if (!this.plotConfig) throw 'Plot not found';

    return this.simulationContainer.clientWidth - (this.canvas.clientWidth - this.plotConfig.offset.left);
  };

  getPlotConfig = (): IPlotConfig | undefined => this.plotConfig;

  getTheme = (): ITheme => this.theme;

  setTheme = (theme: Partial<ITheme>): void => {
    if (!_.isEqual(this.theme.plot, theme.plot)) this.theme = { ...this.theme, ...theme };
    if (!_.isEqual(this.theme.canvas, theme.canvas)) this.theme = { ...this.theme, ...theme };
    if (theme.isDarkMode !== undefined) this.theme.isDarkMode = theme.isDarkMode;

    this.redraw();
  };

  spawnCanvas = (args: ISpawnCanvasArgs): void => {
    const { wPct, hPct, className } = args;
    this.canvas = document.createElement('canvas');
    if (className) this.canvas.classList.add(className);
    this.canvasContext = enhanceCanvasQuality(this.canvas, this.simulationContainer.clientWidth, wPct, hPct);

    if (this.canvas) this.simulationContainer.appendChild(this.canvas);
  };

  drawPlot = (): IPlotConfig => {
    if (this.plotConfig) return this.plotConfig; // Early return when plot has already been drawn.

    const makeArgs = (ctx: Simulation): IDrawPlotArgs => ({
      context: ctx.canvasContext,
      axisOptions: ctx.axisOptions,
      isDarkMode: ctx.theme.isDarkMode,
      axisColor: ctx.theme.plot.axisColor,
      textColor: ctx.theme.canvas.textColor,
    });

    const higherOrderFn = () => drawPlot(makeArgs(this));
    this.canvasContents = this.canvasContents.set(EDrawing.PLOT, [higherOrderFn]);
    this.plotConfig = higherOrderFn();
    return this.plotConfig;
  };

  drawFunctionOnPlot = (args: { fn: (x: number) => number; color?: string }): void => {
    const { fn, color } = args;
    const makeArgs = (ctx: Simulation): IDrawFunctionArgs => ({ plot: ctx.plotConfig, fn: fn, context: ctx.canvasContext, color: color });
    const higherOrderFn = () => drawFunction(makeArgs(this));
    const currentFunctions = this.canvasContents.get(EDrawing.FUNCTION);
    this.canvasContents = this.canvasContents.set(EDrawing.FUNCTION, currentFunctions ? [...currentFunctions, higherOrderFn] : [higherOrderFn]);
    higherOrderFn();
  };

  drawPointOnPlot = (coord: ICoord): void => {
    const makeArgs = (ctx: Simulation): IDrawPlotPointArgs => ({ plot: ctx.plotConfig, coord: coord, context: ctx.canvasContext });
    const higherOrderFn = () => drawPlotPoint(makeArgs(this));
    const currentPoints = this.canvasContents.get(EDrawing.POINT);
    this.canvasContents = this.canvasContents.set(EDrawing.POINT, currentPoints ? [...currentPoints, higherOrderFn] : [higherOrderFn]);
    higherOrderFn();
  };

  drawPointsOnPlot = (coords: ICoord[]): void => {
    const makeArgs = (ctx: Simulation): IDrawPlotPointsArgs => ({ plot: ctx.plotConfig, coords: coords, context: ctx.canvasContext });
    const higherOrderFn = () => drawPlotPoints(makeArgs(this));
    const currentPoints = this.canvasContents.get(EDrawing.POINT);
    this.canvasContents = this.canvasContents.set(EDrawing.POINT, currentPoints ? [...currentPoints, higherOrderFn] : [higherOrderFn]);
    higherOrderFn();
  };

  redraw = (): void => {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    Array.from(this.canvasContents.values()).flatMap((functions) => functions.forEach((f) => f()));
  };

  clearDrawingType = (type: EDrawing): void => {
    this.canvasContents.delete(type);
    this.redraw();
  };
}

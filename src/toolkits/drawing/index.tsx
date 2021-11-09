import { drawFunction, drawPlot, drawPlotPoint, drawPlotPoints } from './drawing-functions';
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
    backgroundColor: { light: string; dark: string };
  };
};

export class Simulation {
  private readonly simulationContainer!: HTMLElement;
  private canvas!: HTMLCanvasElement;
  private canvasContext!: CanvasRenderingContext2D;
  private plotConfig!: IPlotConfig;

  axisOptions = { x: { from: 0, to: 10 }, y: { from: 0, to: 10 } };

  private theme: ITheme = {
    isDarkMode: false,
    plot: { axisColor: { light: '#000000', dark: '#ffffff' } },
    canvas: { backgroundColor: { light: '#ffffff', dark: '#000000' } },
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

  setTheme = (theme: Partial<ITheme>): void => {
    if (!_.isEqual(this.theme.plot, theme.plot)) {
      this.theme = { ...this.theme, ...theme };
      this.drawPlot();
    }
  };

  spawnCanvas = (wPct: number, hPct: number, className?: string): void => {
    this.canvas = document.createElement('canvas');
    if (className) this.canvas.classList.add(className);
    this.canvasContext = enhanceCanvasQuality(this.canvas, this.simulationContainer.clientWidth, wPct, hPct);

    if (this.canvas) this.simulationContainer.appendChild(this.canvas);
  };

  drawPlot = (): IPlotConfig => {
    this.plotConfig = drawPlot(this.canvasContext, this.axisOptions, this.theme.isDarkMode, this.theme.plot.axisColor);
    return this.plotConfig;
  };

  drawFunctionOnPlot = (fn: (x: number) => number, color?: string): void => drawFunction(this.plotConfig, fn, this.canvasContext, color);

  drawPointOnPlot = (coord: ICoord): void => drawPlotPoint(this.plotConfig, coord, this.canvasContext);

  drawPointsOnPlot = (coords: ICoord[]): void => drawPlotPoints(this.plotConfig, coords, this.canvasContext);
}

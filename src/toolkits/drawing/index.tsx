import React from 'react';
import { drawFunction, drawPlot, drawPlotPoint, drawPlotPoints } from './drawing-functions';
import SimulationContainer from '../../components/simulation-components/simulation-container/SimulationContainer';
import { enhanceCanvasQuality } from './helpers';
import { IPlotConfig } from '../../components/simulation-components/math/types';

export const DrawingToolkit = {
  drawPlot: drawPlot,
  drawPoint: drawPlotPoint,
  drawPoints: drawPlotPoints,
  drawFunction: drawFunction,
};

class Simulation {
  private readonly simulationId: string;
  private readonly simulationContainer: JSX.Element;
  private canvas!: HTMLCanvasElement;
  private canvasContext!: CanvasRenderingContext2D;
  private plotConfig!: IPlotConfig;

  axisOptions = { x: { from: 0, to: 10 }, y: { from: 0, to: 10 } };
  theme = { isDarkMode: false, axisColor: { light: '#000000', dark: '#ffffff' } };

  constructor(id: string) {
    this.simulationId = id;
    this.simulationContainer = <SimulationContainer id={id} />;
  }

  getSimulation = () => this.simulationContainer;

  getBottomToXAxis = (): number => {
    const simulationWidth = document.getElementById(this.simulationId);

    if (!this.plotConfig || !simulationWidth) return -1;

    return simulationWidth.clientHeight - (this.canvas.clientHeight - this.plotConfig.offset.bottom);
  };

  getLeftToYAxis = (): number => {
    const simulationWidth = document.getElementById(this.simulationId);

    if (!this.plotConfig || !simulationWidth) return -1;

    return simulationWidth.clientWidth - (this.canvas.clientWidth - this.plotConfig.offset.left);
  };

  spawnCanvas = (wPct: number, hPct: number): void => {
    const simulationRef = document.getElementById(this.simulationId);

    if (!simulationRef) return;

    this.canvas = new HTMLCanvasElement();
    this.canvasContext = enhanceCanvasQuality(this.canvas, simulationRef.clientWidth, wPct, hPct);

    if (this.canvas) simulationRef?.appendChild(this.canvas);
  };

  drawPlot = (): IPlotConfig => {
    this.plotConfig = drawPlot(this.canvasContext, this.axisOptions, this.theme.isDarkMode, this.theme.axisColor);
    return this.plotConfig;
  };
}

const sim = new Simulation('cannon');
console.log(sim);

// sim = new Simulation("cannon");
// sim.spawnCanvas(200, 200);
//
//
// return (
//  {sim.getSimulation()}
// )

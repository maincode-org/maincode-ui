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

export type ICoord = {
  x: number;
  y: number;
};

export type IPoint = ICoord & { isInPlotView: boolean };

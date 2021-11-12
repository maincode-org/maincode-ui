import { IDocumentationPageContent, DrawingToolkit, MathToolkit, SimulationContainer, Table, LiveCodeEditor } from 'maincode-ui';
import { formatObject } from '../helpers';

const makeMultiArgsLabelText = (functionName: string, params: string[]) => `${functionName}(
  ${params.reduce((a, p) => `${a},\n  ${p}`)}
)`;

const makeSingleArgLabelText = (functionName: string, param: string) => `${functionName}(${param})`;

const simulationClassUtilities = [
  {
    label: (
      <LiveCodeEditor
        enablePreview={false}
        code={makeMultiArgsLabelText('axisOptions', [`${formatObject([`x: ${formatObject(['from: number', 'to: number'], 2)}`, `y: ${formatObject(['from: number', 'to: number'], 2)}`], 1)}`])}
      />
    ),
    value: 'Getter/Setter for plot axisOptions',
  },
  { label: <LiveCodeEditor enablePreview={false} code='getSimulation()' />, value: 'Returns the simulation container HTML Element' },
  { label: <LiveCodeEditor enablePreview={false} code='getBottomToXAxis()' />, value: 'Returns the distance, in px, from the bottom of the simulation container, to the x-axis of the plot' },
  { label: <LiveCodeEditor enablePreview={false} code='getLeftToYAxis()' />, value: 'Returns the distance, in px, from the left of the simulation container, to the y-axis of the plot' },
  { label: <LiveCodeEditor enablePreview={false} code='getPlotConfig()' />, value: 'Returns the plotConfig object which holds plot data' },
  { label: <LiveCodeEditor enablePreview={false} code='getTheme()' />, value: 'Returns the theme object which holds theme data' },
  {
    label: (
      <LiveCodeEditor
        enablePreview={false}
        code={makeMultiArgsLabelText('setTheme', [
          `${formatObject(
            [
              'isDarkMode: boolean',
              `plot: ${formatObject([`axisColor: ${formatObject(['light: string', 'dark: string'], 3)}`], 2)}`,
              `canvas: ${formatObject([`textColor: ${formatObject(['light: string', 'dark: string'], 3)}`], 2)}`,
            ],
            1
          )}`,
        ])}
      />
    ),
    value: 'Sets the provided changes to the theme object',
  },
  {
    label: <LiveCodeEditor enablePreview={false} code={makeMultiArgsLabelText('spawnCanvas', [`${formatObject(['wPct: number', 'hPct: number', 'className?: string'], 1)}`])} />,
    value: 'Spawns an HTML canvas inside the simulation container',
  },
  {
    label: <LiveCodeEditor enablePreview={false} code={makeMultiArgsLabelText('drawFunctionOnPlot', [`${formatObject(['fn: (x: number) => number', 'color?: string'], 1)}`])} />,
    value: 'Draws the provided function, in the provided color, in the plot.',
  },
  {
    label: <LiveCodeEditor enablePreview={false} code={makeMultiArgsLabelText('drawPointOnPlot', [`${formatObject(['x: number', 'y: number'], 1)}`])} />,
    value: 'Draws a point at the provided canvas (x,y)-coordinate in the plot',
  },
  {
    label: <LiveCodeEditor enablePreview={false} code={makeSingleArgLabelText('drawPointsOnPlot', `\n  ${formatObject(['x: number', 'y: number'], 1)}[]\n`)} />,
    value: 'Draws points at the provided canvas (x,y)-coordinates in the plot',
  },
  { label: <LiveCodeEditor enablePreview={false} code='redraw()' />, value: 'Redraws all contents of the canvas' },
  {
    label: <LiveCodeEditor enablePreview={false} code={makeSingleArgLabelText('clearDrawingType', '\n  "plot" |\n  "function" | \n  "point"\n')} />,
    value: 'Removes the contents of the provided drawing type. For example the parameter <code>EDrawing.FUNCTION</code> removes all currently drawn functions from the canvas',
  },
];

export const drawingToolkitPageDocumentation: IDocumentationPageContent = {
  description: <p>Create and draw on an HTML canvas in a clean and highly customizable manner.</p>,
  mainText: (
    <>
      <p>
        In this toolkit you will be able to create a simulation container containing an HTML canvas. The DrawingToolkit stands out in comparison to the other toolkits, as exposes a class in which most
        of the functionality lives. This implementation detail frees you from having to control your own canvas element, which abstracts away a lot of complexity.
      </p>
      <Table
        className='mb-2'
        title='DrawingToolkit utilities'
        leftWidthPct={50}
        properties={[
          {
            label: <LiveCodeEditor enablePreview={false} code={makeSingleArgLabelText('makeSimulation', 'id: string')} />,
            value: 'Creates a <code>Simulation</code> class which contains your simulation container. You can use the <code>spawnCanvas()</code> function on the Simulation class to spawn a canvas.',
          },
        ]}
      />
      <Table title='Simulation class utilities' leftWidthPct={50} properties={simulationClassUtilities} />
    </>
  ),
  codeExamples: [
    {
      title: 'Minimal example - Draw a function',
      description: (
        <p>
          Spawn a canvas. Then draw a plot, in which you want to draw a function. Note that the makeSimulation parameter <code>id</code> needs to be the id of your SimulationContainer.
        </p>
      ),
      code: `
import { DrawingToolkit, MathToolkit } from 'maincode-ui';

const simulation = DrawingToolkit.makeSimulation('mySim');

simulation.spawnCanvas({ wPct: 90, hPct: 90 });

simulation.drawPlot();

simulation.drawFunctionOnPlot(
  {
    fn: MathToolkit.parabola.throw.makeFn({ a: -0.2, c: 3 }),
    color: '#ffffff'
  }
);
      `,
      enablePreview: false,
    },
    {
      title: 'Actual example - Draw a quadratic function',
      description: <p>Spawning a canvas, a plot and a function within the plot, using the SimulationContainer component.</p>,
      code: `
() => {

const paint = () => {
  const simulation = DrawingToolkit.makeSimulation('mySim');

  simulation.spawnCanvas({ wPct: 95, hPct: 95 });

  simulation.drawPlot();

  simulation.drawFunctionOnPlot(
    {
      fn: MathToolkit.parabola.throw.makeFn({ a: -0.2, c: 3 }),
      color: '#3d3d'
    }
  );
}

return(
  <SimulationContainer
    id="mySim"
    backgroundColor="#ffffff"
    onLoad={() => paint()}
  />
);

}
      `,
      noInline: false,
      scope: { DrawingToolkit, MathToolkit, SimulationContainer },
      enablePreview: true,
    },
  ],
};

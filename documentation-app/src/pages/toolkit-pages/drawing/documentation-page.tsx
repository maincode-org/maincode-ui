import { IDocumentationPageContent, Table } from 'maincode-ui';

const simulationClassUtilities = [
  { label: '<code>getSimulation</code>', value: 'Returns the simulation container HTML Element' },
  { label: '<code>getBottomToXAxis</code>', value: 'Returns the distance, in px, from the bottom of the simulation container, to the x-axis of the plot' },
  { label: '<code>getLeftToYAxis</code>', value: 'Returns the distance, in px, from the left of the simulation container, to the y-axis of the plot' },
  { label: '<code>getPlotConfig</code>', value: 'Returns the plotConfig object which holds plot dataa' },
  { label: '<code>getTheme</code>', value: 'Returns the theme object which holds theme data' },
  { label: '<code>setTheme</code>', value: 'Sets the provided changes to the theme object' },
  { label: '<code>spawnCanvas</code>', value: 'Spawns an HTML Canvas inside the simulation container' },
  { label: '<code>drawPlot</code>', value: 'Draws a coordinate system inside the canvas element' },
  { label: '<code>drawFunctionOnPlot</code>', value: 'Draws the provided function as a line in the plot' },
  { label: '<code>drawPointOnPlot</code>', value: 'Draws a point at the provided canvas (x,y) coordinate in the plot' },
  { label: '<code>drawPointsOnPlot</code>', value: 'Draws points at the provided canvas (x,y) coordinates in the plot' },
  { label: '<code>redraw</code>', value: 'Redraws all contents of the canvas' },
  {
    label: '<code>clearDrawingType</code>',
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
        properties={[
          {
            label: '<code>makeSimulation</code>',
            value:
              'Takes an <code>id</code> as parameter and creates a <code>Simulation</code> class which contains a simulation container. You can use the spawnCanvas function on the Simulation class to spawn a canvas.',
          },
        ]}
      />
      <Table title='Simulation class utilities' properties={simulationClassUtilities} />
    </>
  ),
  codeExamples: [
    {
      title: 'Draw a function',
      description: (
        <p>
          Spawn a canvas. Then draw a plot, in which you want to draw a function. Note that the makeSimulation parameter <code>id</code> needs to be the id of your SimulationContainer.
        </p>
      ),
      code: `
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
  ],
};

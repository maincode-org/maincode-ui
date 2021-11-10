import { IDocumentationPageContent, Table } from 'maincode-ui';

const simulationClassUtilities = [
  { label: 'getSimulation', value: 'Returns the simulation container HTML Element' },
  { label: 'getBottomToXAxis', value: 'Returns the distance, in px, from the bottom of the simulation container, to the x-axis of the plot' },
  { label: 'getLeftToYAxis', value: 'Returns the distance, in px, from the left of the simulation container, to the y-axis of the plot' },
  { label: 'getPlotConfig', value: 'Returns the plotConfig object which holds plot dataa' },
  { label: 'getTheme', value: 'Returns the theme object which holds theme data' },
  { label: 'setTheme', value: 'Sets the provided changes to the theme object' },
  { label: 'spawnCanvas', value: 'Spawns an HTML Canvas inside the simulation container' },
  { label: 'drawPlot', value: 'Draws a coordinate system inside the canvas element' },
  { label: 'drawFunctionOnPlot', value: 'Draws the provided function as a line in the plot' },
  { label: 'drawPointOnPlot', value: 'Draws a point at the provided canvas (x,y) coordinate in the plot' },
  { label: 'drawPointsOnPlot', value: 'Draws points at the provided canvas (x,y) coordinates in the plot' },
  { label: 'redraw', value: 'Redraws all contents of the canvas' },
  {
    label: 'clearDrawingType',
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
            label: 'makeSimulation',
            value:
              'Takes an <code>id</code> as parameter and creates a <code>Simulation</code> class which contains a simulation container. You can use the spawnCanvas function on the Simulation class to spawn a canvas.',
          },
        ]}
      />
      <Table title='Simulation class utilities' properties={simulationClassUtilities} />
    </>
  ),
};

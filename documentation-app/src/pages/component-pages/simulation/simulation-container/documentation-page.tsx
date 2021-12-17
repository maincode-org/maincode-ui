import { IDocumentationPageContent } from 'maincode-ui';

export const simulationContainerDocumentation: IDocumentationPageContent = {
  description: (
    <p>
      A smart container for your simulations. The <code>SimulationContainer</code> component provides utilities to make working with simulations more convenient.
    </p>
  ),
  codeExamples: [
    {
      title: 'Minimal example',
      description: (
        <p>
          See <code>DrawingToolkit&lsquo;s</code> {`"Actual example - Draw a quadratic function" for an example of how to use in combination with the `}
          <code>DrawingToolkit</code>.
        </p>
      ),
      code: `
<SimulationContainer id="mySim"/>
      `,
      enablePreview: false,
    },
  ],
  props: [
    {
      title: 'id',
      description: 'An id used to find the component in the DOM when used in combination with the toolkits',
      required: true,
      type: 'string',
    },
    {
      title: 'onLoad',
      description: 'Callback used when the component has finished mounting',
      required: false,
      type: '(ref: HTMLElement) => void',
    },
    { title: 'backgroundColor', description: 'The background color of the container', required: false, type: 'string' },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
    { title: 'children', description: 'Child components to render inside the container', required: false, type: 'React.ReactElement | (React.ReactElement | undefined)[]' },
  ],
};

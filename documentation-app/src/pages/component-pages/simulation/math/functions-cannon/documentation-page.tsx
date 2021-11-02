import { IDocumentationPageContent, FunctionsCannon } from 'maincode-ui';

const themePropType = `
{
  backgroundColor?: { light: string; dark: string };
  parabolaColor?: { light: string; dark: string };
  playButtonColor?: { light: "primary", "secondary", "success"; dark: "primary", "secondary", "success" };
  axisColor?: { light: string; dark: string };
}
`;

export const functionsCannonDocumentation: IDocumentationPageContent = {
  description: <p>Use this math function simulation to create engaging educational content!</p>,
  codeExamples: [
    {
      title: 'Basic usage',
      code: `
<FunctionsCannon
  id="cannon"
  parabolaValues={{a: -0.2, c: 3}}
  axisOptions={{x: {from: 0, to: 15}, y: {from: 0, to: 10}}}
  shouldRevealA={false}
  shouldRevealC={false}
/>`,
      scope: { FunctionsCannon },
    },
  ],
  props: [
    { title: 'id', description: 'Id provided to the canvas', required: true, type: 'string' },
    {
      title: 'parabolaValues',
      description: 'The A and C values of the parabola function used to draw the function and for the student to calculate.',
      required: true,
      type: '{ a: number; c: number }',
    },
    { title: 'axisOptions', description: 'Configuration values for the coordinate system axis', required: false, type: 'string', defaultValue: '{x: {from: 0, to: 10}, y: {from: 0, to: 10}' },
    { title: 'shouldRevealA', description: 'Whether or not the value of A should be revealed to the student', required: false, type: 'boolean', defaultValue: 'false' },
    { title: 'shouldRevealC', description: 'Whether or not the value of C should be revealed to the student', required: false, type: 'boolean', defaultValue: 'false' },
    { title: 'theme', description: 'Color theming of background color, axis color, parabola color and play button color', required: false, type: themePropType },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
};

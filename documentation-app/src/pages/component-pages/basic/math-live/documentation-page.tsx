import { IDocumentationPageContent, MathLive } from 'maincode-ui';

export const mathLivePageDocumentation: IDocumentationPageContent = {
  description: <p>Interact with a technical mathematical input field which supports any mathematical construct with instant computational evaluation. </p>,
  codeExamples: [
    {
      title: 'Basic example',
      description: <p>Display mathematically correct formulas</p>,
      code: '<MathLive className="p-1" formula={`f(x)=2x²+3+pi`} />',
      scope: { MathLive },
    },
    {
      title: 'Placeholders',
      description: <p>Use placeholders to indicate missing values</p>,
      code: '<MathLive className="p-1" formula="f(x)=2x²+3x+\\placeholder{}" />',
      scope: { MathLive },
    },
  ],
  props: [
    { title: 'formula', description: 'The default formula for the input field', required: true, type: 'string' },
    { title: 'answerValues', description: 'Provide the logic of correct values to your placeholders', required: false, type: '{ value: string; shouldReveal: boolean }[]', defaultValue: '[]' },
    { title: 'onChange', description: 'Callback function for when the input field changes', required: false, type: '(values: (string | undefined)[]) => void', defaultValue: 'none' },
    { title: 'keyboardMode', description: 'Keyboard options for the math keyboard', required: false, type: '"auto" | "manual" | "onfocus" | "off"', defaultValue: 'off' },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
  styles: [{ propertyName: '--color-glass', description: 'A frosted glass color' }],
};

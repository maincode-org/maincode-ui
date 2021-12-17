import { IDocumentationPageContent, MathLive, LiveCodeEditor } from 'maincode-ui';

export const mathLivePageDocumentation: IDocumentationPageContent = {
  description: <p>Interact with a technical mathematical input field which supports any mathematical construct with instant computational evaluation. </p>,
  mainText: (
    <>
      <p>
        This component is based entirely on the{' '}
        <a href='https://cortexjs.io/mathlive/' target='_blank' rel='noreferrer'>
          Cortex.js MathLive
        </a>{' '}
        library, converted to a <b>React.js</b> component.
      </p>
      <p>Our component is also modified to be more useful in exercise content, where the user is meant to change only part of the equation.</p>

      <h3>{'>'} Basic example</h3>
      <p>Display mathematically correct formulas. The following code:</p>

      <LiveCodeEditor enablePreview={false} code={'<MathLive formula="f(x)=2x^2+3+\\pi" />'} />

      <p>Produces the below input field:</p>

      <MathLive formula='f(x)=2x^2+3+\pi' />

      <h3>{'>'} Placeholders</h3>
      <p>Use placeholders to indicate missing values. The following code:</p>

      <LiveCodeEditor enablePreview={false} code={'<MathLive formula="f(x)=2x^2+3x+\\placeholder{}" />'} />

      <p>Produces the below input field, with an editable placeholder. Editing the formula is currently disabled.</p>

      <MathLive formula='f(x)=2x^2+3x+\placeholder{}' />
    </>
  ),
  props: [
    { title: 'formula', description: 'The default formula for the input field', required: true, type: 'string' },
    { title: 'answerValues', description: 'Provide the logic of correct values to your placeholders', required: false, type: '{ value: string; shouldReveal: boolean }[]', defaultValue: '[]' },
    { title: 'onChange', description: 'Callback function for when the input field changes', required: false, type: '(values: (string | undefined)[]) => void', defaultValue: 'none' },
    { title: 'keyboardMode', description: 'Keyboard options for the math keyboard', required: false, type: '"auto" | "manual" | "onfocus" | "off"', defaultValue: 'off' },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
  styles: [
    { propertyName: '--color-glass', description: 'Controls the background color' },
    { propertyName: '--border-glass', description: 'Controls the border color' },
  ],
};

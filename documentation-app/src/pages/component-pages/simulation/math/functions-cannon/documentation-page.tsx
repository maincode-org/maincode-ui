import { IDocumentationPageContent, FunctionsCannon } from 'maincode-ui';

export const functionsCannonDocumentation: IDocumentationPageContent = {
  description: <p>Use this math function simulation to create engaging educational content!</p>,
  codeExamples: [{ title: 'Basic usage', code: '<FunctionsCannon id="cannon"/>', scope: { FunctionsCannon } }],
  styles: [
    { className: '<code>cannonBody</code>', description: 'The body of the cannon (not the wheel)' },
    { className: '<code>canvas</code>', description: 'The container of the canvas' },
  ],
};

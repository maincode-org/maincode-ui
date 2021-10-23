import { IDocumentationPageContent, FunctionsCannon } from 'maincode-ui';

export const functionsCannonDocumentation: IDocumentationPageContent = {
  description: <p>Use this math function simulation to create engaging educational content!</p>,
  codeExamples: [
    {
      title: 'Basic usage',
      code: '<FunctionsCannon id="cannon" parabolaValues={{a: -0.2, c: 3}} axisOptions={{x: {from: 0, to: 15}, y: {from: 0, to: 10}}} shouldRevealA={false} shouldRevealC={false}/>',
      scope: { FunctionsCannon },
    },
  ],
};

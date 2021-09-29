import { IDocumentationPageContent, FunctionsCannon } from 'maincode-ui';

export const functionsCannonDocumentation: IDocumentationPageContent = {
  description: <p>Use this math function simulation to create engaging educational content!</p>,
  codeExamples: [{ title: 'Basic usage', code: '<FunctionsCannon id="cannon"/>', scope: { FunctionsCannon } }],
};

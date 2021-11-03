import { IDocumentationPageContent, PrettyList, Table } from 'maincode-ui';

const utilityDescriptions = {
  makeFn: { label: '<code>makeFn</code>', value: 'Creates a function x => y of the above equation type' },
  solveFnGivenY: { label: '<code>solveFnGivenY</code>', value: 'Solves x for a given y' },
  throw: { label: '<code>throw</code>', value: 'Contains the <code>makeFn</code> function which creates a function x => y of a throw parabola' },
};

export const mathToolkitPageDocumentation: IDocumentationPageContent = {
  description: <p>Everything you need to work with mathematical functions.</p>,
  mainText: (
    <div className='mt-4'>
      <p>In this toolkit you will be able to work with the following equation types:</p>
      <PrettyList ordering='unordered' items={['linear', 'exponential', 'parabola']} />
      <p>For each of these types you have access to different utilities:</p>
      <Table className='mb-2' title='Linear function utility support' properties={[utilityDescriptions.makeFn, utilityDescriptions.solveFnGivenY]} />
      <Table className='mb-2' title='Exponential function utility support' properties={[utilityDescriptions.makeFn, utilityDescriptions.solveFnGivenY]} />
      <Table title='Parabola function utility support' properties={[utilityDescriptions.makeFn, utilityDescriptions.solveFnGivenY, utilityDescriptions.throw]} />
    </div>
  ),
  codeExamples: [
    {
      title: 'Create a linear function',
      description: <p>Access the helper function to create a linear function.</p>,
      code: `
import { MathToolkit } from 'maincode-ui';

const myLinearFn = MathToolkit.linear.makeFn({ a: 1, b: 4 });
`,
      enablePreview: false,
    },
    {
      title: 'Solve a linear function given y',
      description: <p>Access the helper function to solve a linear function for a given y.</p>,
      code: `
import { MathToolkit } from 'maincode-ui';

const x = MathToolkit.linear.solveFnGivenY({ a: 1.1, b: 2 }, 1);
`,
      enablePreview: false,
    },
  ],
};

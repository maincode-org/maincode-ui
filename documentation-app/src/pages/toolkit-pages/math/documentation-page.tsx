import { IDocumentationPageContent, PrettyList, Table } from 'maincode-ui';

const makeFnText = (prefix: string, params: string[]) => `${prefix}.makeFn({
    ${params.reduce((a, p) => `${a},\n    ${p}`)}
})
`;

const descMaker = {
  makeFn: (prefix: string, params: string[]) => ({ label: <code>{makeFnText(prefix, params)}</code>, value: 'Creates a <code>function x => y</code> of the above equation type' }),
  solveFnGivenY: { label: '<code>solveFnGivenY</code>', value: 'Solves x for a given y' },
  throw: { label: '<code>throw</code>', value: 'Contains the <code>makeFn</code> function which creates a function x => y of a throw parabola' },
};

export const mathToolkitPageDocumentation: IDocumentationPageContent = {
  description: <p>Everything you need to work with mathematical functions.</p>,
  mainText: (
    <div>
      <p>In this toolkit you will be able to work with the following equation types:</p>
      <PrettyList ordering='none' items={['linear', 'exponential', 'parabola']} />
      <br />
      <p>For each of these types you have access to different utilities:</p>
      <Table className='mb-2' title='Linear function utility support' properties={[descMaker.makeFn('linear', ['a: number', 'b: number']), descMaker.solveFnGivenY]} />
      <Table className='mb-2' title='Exponential function utility support' properties={[descMaker.makeFn('exponential', ['a: number', 'b: number']), descMaker.solveFnGivenY]} />
      <Table title='Parabola function utility support' properties={[descMaker.makeFn('parabola', ['a: number', 'c: number']), descMaker.solveFnGivenY, descMaker.throw]} />
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

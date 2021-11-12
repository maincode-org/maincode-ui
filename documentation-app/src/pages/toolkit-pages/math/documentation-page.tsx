import { IDocumentationPageContent, PrettyList, Table, LiveCodeEditor } from 'maincode-ui';
import { formatObject } from '../helpers';

const makeFnText = (prefix: string, params: string[]) => `${prefix}.makeFn(${formatObject(params)})`;

const makeSolveGivenYText = (prefix: string, params: string[]) => `${prefix}.solveFnGivenY(
    ${params.reduce((a, p) => `${a},\n    ${p}`)}
)`;

const descMaker = {
  makeFn: (prefix: string, params: string[], formula: string) => ({
    label: <LiveCodeEditor enablePreview={false} code={makeFnText(prefix, params)} />,
    value: `Creates a <code>function x => y</code> of the above equation type - <code>${formula}</code>`,
  }),
  solveFnGivenY: (prefix: string, params: string[]) => ({ label: <LiveCodeEditor enablePreview={false} code={makeSolveGivenYText(prefix, params)} />, value: 'Solves x for a given y' }),
};

export const mathToolkitPageDocumentation: IDocumentationPageContent = {
  description: <p>Everything you need to work with mathematical functions.</p>,
  mainText: (
    <div>
      <p>In this toolkit you will be able to work with the following equation types:</p>
      <PrettyList ordering='none' items={['linear', 'exponential', 'parabola']} />
      <br />
      <p>For each of these types you have access to different utilities:</p>
      <Table
        className='mb-2'
        title='Linear function utility support'
        properties={[descMaker.makeFn('linear', ['a: number', 'b: number'], 'f(x)=ax+b'), descMaker.solveFnGivenY('linear', [formatObject(['a: number', 'b: number'], 1), 'y: number'])]}
      />
      <Table
        className='mb-2'
        title='Exponential function utility support'
        properties={[descMaker.makeFn('exponential', ['a: number', 'b: number'], 'f(x)=a^x+b'), descMaker.solveFnGivenY('exponential', [formatObject(['a: number', 'b: number'], 1), 'y: number'])]}
      />
      <Table
        title='Parabola function utility support'
        properties={[
          descMaker.makeFn('parabola', ['a: number', 'b: number', 'c: number'], 'f(x)=ax^2+bx+c'),
          descMaker.solveFnGivenY('parabola', [formatObject(['a: number', 'b: number', 'c: number'], 1), 'y: number']),
          descMaker.makeFn('parabola.throw', ['a: number', 'c: number'], 'f(x)=ax^2+x+c'),
        ]}
      />
    </div>
  ),
  codeExamples: [
    {
      title: 'Create a linear function',
      description: <p>Access the helper function to create a linear function.</p>,
      code: `
import { MathToolkit } from 'maincode-ui';

const myLinearFn = MathToolkit.linear.makeFn({ a: 1, b: 4 });

const calcYForMyLinearFn = myLinearFn(22);
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

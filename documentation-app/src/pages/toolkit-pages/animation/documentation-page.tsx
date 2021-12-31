import { IDocumentationPageContent, PrettyList, Table, LiveCodeEditor } from 'maincode-ui';
import { formatObject } from '../helpers';

const makePlayAnimationText = (prefix: string, params: string[]) => `${prefix}.playAnimation(${formatObject(params)})`;
const makeMakeFnAnimationText = (prefix: string, params: string[]) => `${prefix}.makeFnAnimation(${formatObject(params)})`;

export const animationToolkitPageDocumentation: IDocumentationPageContent = {
  description: <p>Make cool animations - for example for educational purposes.</p>,
  mainText: (
    <>
      <p>
        In this toolkit you will be able to work with animations on any HTML element. The toolkit uses <a href='https://greensock.com/gsap/'>GSAP</a> - a fast and popular animation library. The
        toolkit is, in addition to general purpose utilities, divided into purposes for which you would want to use animations.
        <PrettyList ordering='none' items={['functions']} />
        <Table
          className='mb-8'
          title='General purpose utilities'
          leftWidthPct={50}
          properties={[
            {
              label: <LiveCodeEditor enablePreview={false} code={makePlayAnimationText('', ['element: HTMLElement', 'timelines: gsap.Timeline[]'])} />,
              value: 'Executes the animations of the given array of GSAP timelines. The GSAP Timeline type is gsap.core.Timeline when imported from the library.',
            },
          ]}
        />
        <Table
          className='mb-8'
          title='Function animations'
          leftWidthPct={50}
          properties={[
            {
              label: (
                <LiveCodeEditor
                  enablePreview={false}
                  code={makeMakeFnAnimationText('functions', [
                    'element: HTMLElement',
                    'plot: IPlotConfig',
                    'fn: (x: number) => number',
                    'initialCoord: ICoord',
                    'leftToYAxis: number',
                    'bottomToXAxis: number',
                    'duration: number',
                  ])}
                />
              ),
              value: 'Creates a GSAP timeline which animates a trajectory given by a function on a given HTML element.',
            },
          ]}
        />
      </p>
    </>
  ),
  codeExamples: [
    {
      title: 'Create an animation',
      code: `
import { AnimationToolkit, DrawingToolkit } from 'maincode-ui';

const myAnimation = AnimationToolkit.functions.makeFnAnimation(
  cannonBall,
  DrawingToolkit.getPlotConfig(),
  MathToolkit.parabola.throw.makeFn({ a: 0.2), c: 3 }),
  {x: 10, y: 10},
  20,
  20,
  1.5
);
`,
      enablePreview: false,
    },
    {
      title: 'Plays an animation',
      code: `
import { AnimationToolkit, MathToolkit } from 'maincode-ui';

const myAnimation = AnimationToolkit.functions.makeFnAnimation(
  cannonBall,
  DrawingToolkit.getPlotConfig(),
  MathToolkit.parabola.throw.makeFn({ a: 0.2), c: 3 }),
  {x: 10, y: 10},
  20,
  20,
  1.5
);

AnimationToolkit.playAnimation(myElement, myAnimation);
`,
      enablePreview: false,
    },
  ],
};

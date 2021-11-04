import { IDocumentationPageContent, PrettyList, Table } from 'maincode-ui';

export const animationToolkitPageDocumentation: IDocumentationPageContent = {
  description: <p>Make cool animation - for example for educational purposes.</p>,
  mainText: (
    <>
      <p>
        In this toolkit you will be able to work with animations on any HTML element. The toolkit uses <a href='https://greensock.com/gsap/'>GSAP</a> - a fast and popular animation library. The
        toolkit is divided into purposes for which you would want to use animations.
        <PrettyList ordering='unordered' items={['functions', 'cannon']} />
        <Table className='mb-2' title='General purpose utilities' properties={[{ label: 'playAnimation', value: 'Executes the animations of the given array of GSAP timelines.' }]} />
        <Table
          className='mb-2'
          title='Function animations'
          properties={[{ label: 'makeFnAnimation', value: 'Creates a GSAP timeline which animates a trajectory given by a function on a given HTML element. ' }]}
        />
        <Table title='Cannon animations' properties={[{ label: 'makeCannonAnimation', value: 'Creates a GSAP timeline which animates a recoil effect on a given HTML element.' }]} />
      </p>
    </>
  ),
  codeExamples: [
    {
      title: 'Create an animation',
      code: `
import { AnimationToolkit } from 'maincode-ui';

const myAnimation = AnimationToolkit.functions.makeFnAnimation(
  cannonBall,
  plot,
  MathToolkit.parabola.throw.makeFn({ a: Number(parabolaInputValues[0]), c: Number(parabolaInputValues[1]) }),
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
import { AnimationToolkit } from 'maincode-ui';

const myAnimation = AnimationToolkit.functions.makeFnAnimation(
  cannonBall,
  plot,
  MathToolkit.parabola.throw.makeFn({ a: Number(parabolaInputValues[0]), c: Number(parabolaInputValues[1]) }),
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

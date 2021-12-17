import { IDocumentationPageContent, InfoArea, ParticleContainer } from 'maincode-ui';
import ParticleControlDemo from './particle-control-demo/ParticleControlDemo';
import { minimalExample } from './code-examples';

export const particleContainerDocumentation: IDocumentationPageContent = {
  description: (
    <p>
      Create engaging <code>ts-particles</code> animated backgrounds!
    </p>
  ),
  codeExamples: [
    {
      title: 'Minimal example',
      code: minimalExample,
      description: (
        <>
          Place the <code>ParticleContainer</code> in a <code>div</code> and have its background cover all elements within the <code>div</code>.
        </>
      ),
      enablePreview: false,
      scope: { ParticleContainer },
    },
  ],
  customContent: (
    <>
      <h3 className='mt-2 mb-2'>🚀 Landing page example</h3>
      <ParticleControlDemo />
      <InfoArea className='mt-1'>
        The above example is constructed using a <code>ParticleContainer</code> with a background image controlled through an <code>IonFab</code> in the top left corner. The glass boxes are just
        elements with the <code>thin-glass-bg</code> generic classname applied. Feel inspired? check out this demo&apos;s React component implementation and stylesheet{' '}
        <a href='https://github.com/maincode-org/maincode-ui/tree/main/documentation-app/src/pages/component-pages/layout/particle-container/particle-control-demo' target='_blank' rel='noreferrer'>
          here.
        </a>
      </InfoArea>
    </>
  ),
  props: [
    {
      title: 'isAnimationEnabled',
      description: 'Toggles the rendering of the animation',
      required: false,
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      title: 'particleConfig',
      description: 'Classes for custom styling',
      required: false,
      type: 'see <a href="https://github.com/matteobruni/tsparticles/tree/main/components/react" target="_blank" rel="noreferrer">ts-particles</a> options argument',
      defaultValue:
        '<a href="https://github.com/maincode-org/maincode-ui/blob/main/src/components/layout-components/particle-container/lean-particlesjs-config.tsx" target="_blank" rel="noreferrer">Maincode preset file</a>',
    },
    {
      title: 'className',
      description: 'Classes for custom styling',
      required: false,
      type: 'string',
      defaultValue: '""',
    },
  ],
};

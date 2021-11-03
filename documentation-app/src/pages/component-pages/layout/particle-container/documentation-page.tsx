import { IDocumentationPageContent, InfoArea } from 'maincode-ui';
import ParticleControlDemo from './particle-control-demo/ParticleControlDemo';

export const particleContainerDocumentation: IDocumentationPageContent = {
  description: <p>Create engaging particle.js animated backgrounds!</p>,
  customContent: (
    <>
      <ParticleControlDemo />
      <InfoArea className='mt-1'>
        The above example is constructed using a <code>ParticleContainer</code> with a background image controlled through an <code>IonFab</code> in the top left corner. The glass boxes are just
        elements with the <code>thin-glass-bg</code>
        generic classname applied.
      </InfoArea>
    </>
  ),
  codeExamples: [],
  props: [
    { title: 'isAnimationEnabled', description: 'Toggles the rendering of the animation', required: false, type: 'boolean', defaultValue: 'true' },
    { title: 'particleConfig', description: 'Classes for custom styling', required: false, type: 'see particle.js config object', defaultValue: 'Abbreviated: Maincode preset' },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
};

import { IDocumentationPageContent, InfoArea } from 'maincode-ui';
import ParticleControlDemo from './particle-control-demo/ParticleControlDemo';

export const particleContainerDocumentation: IDocumentationPageContent = {
  description: <p>Create engaging particle.js animated backgrounds!</p>,
  customContent: (
    <>
      <ParticleControlDemo />
      <InfoArea className='mt-1'>
        The above example is constructed using a ParticleContainer with a background image controlled through an IonFab in the top left corner. The headers are just elements with the thin-glass-bg
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

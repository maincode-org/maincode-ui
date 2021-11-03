import { IDocumentationPageContent, ParticleContainer } from 'maincode-ui';
import ParticleControlDemo from './particle-control-demo/ParticleControlDemo';

export const particleContainerDocumentation: IDocumentationPageContent = {
  description: <p>Create engaging particle.js animated backgrounds!</p>,
  customContent: <ParticleControlDemo />,
  codeExamples: [],
  props: [
    { title: 'isAnimationEnabled', description: 'Toggles the rendering of the animation', required: false, type: 'boolean', defaultValue: 'true' },
    { title: 'particleConfig', description: 'Classes for custom styling', required: false, type: 'see particle.js config object', defaultValue: 'Abbreviated: Maincode preset' },
    { title: 'className', description: 'Classes for custom styling', required: false, type: 'string', defaultValue: '""' },
  ],
};

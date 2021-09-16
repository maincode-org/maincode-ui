import React from 'react';
import drawing from './Drawing';
import DocumentationSection, { IComponentUsage, IDocumentationPageContent, IPropertyDetail, IStyleDetail } from './components/documentation-components/documentation-section/DocumentationSection';
import { styleScrollbars } from './helpers/style-scrollbar';
import CopyArea from './components/copy-area/CopyArea';

import png from 'assets/cropped-robot.png'; // Path to img must not be relative "./".
import { IonButton } from '@ionic/react';
import LiveCodeEditor from './components/live-code-editor/LiveCodeEditor';

interface Props {
  text: string;
}

export const ExampleComponent: React.FC<Props> = ({ text }: Props) => {
  return (
    <div className={`glass-bg shadow-xl rounded`}>
      <p className='theme-border theme-bg'>Hej</p>
      Example Component: {text}
      {drawing}
      <img src={png} height={200} width={200} alt='test' />
      <IonButton className='ion-float-end'>Primary Color</IonButton>
    </div>
  );
};

const jsxExample = `
<div>
  <h3>
    Hello World! this is one very very long line of code, which <strong>will</strong> break down correctly!
  </h3>
  <h3>
    Hello World!
  </h3>
  <h3>
    Hello World!
  </h3>
  <h3>
    Hello World!
  </h3>
</div>
`;

export const LiveEditExample: React.FC = () => <LiveCodeEditor noInline={false} code={jsxExample} scope={{ IonButton }} />;

export { DocumentationSection, CopyArea, styleScrollbars, IDocumentationPageContent, IPropertyDetail, IStyleDetail, IComponentUsage };

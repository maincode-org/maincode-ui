import React from 'react';
import drawing from './Drawing';
import DocumentationSection, { IDocumentationPageContent, IPropertyDetail, IStyleDetail, IComponentUsage } from './components/documentation-components/documentation-section/DocumentationSection';
import { styleScrollbars } from './helpers/style-scrollbar';
import CodeArea, { ECodeType } from './components/code-area/CodeArea';

import png from 'assets/cropped-robot.png'; // Path to img must not be relative "./".
import { IonButton } from '@ionic/react';

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

export { DocumentationSection, CodeArea, styleScrollbars, IDocumentationPageContent, IPropertyDetail, IStyleDetail, IComponentUsage, ECodeType };

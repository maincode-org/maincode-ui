import React from 'react';
import drawing from './Drawing';
import DocumentationSection from './components/documentation-components/documentation-section/DocumentationSection';
import { styleScrollbars } from './helpers/style-scrollbar';

import png from 'assets/cropped-robot.png'; // Path to img must not be relative "./".
import { IonButton } from '@ionic/react';

interface Props {
  text: string;
}

export const ExampleComponent: React.FC<Props> = ({ text }: Props) => {
  return (
    <div className={`glass-bg shadow-xl rounded`}>
      Example Component: {text}
      {drawing}
      <img src={png} height={200} width={200} alt='test' />
      <IonButton className='ion-float-end'>Primary Color</IonButton>
    </div>
  );
};

export { DocumentationSection, styleScrollbars };

import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { IonButton } from '@ionic/react';

export const ExampleButton: React.FC<{ text: string }> = ({ text }) => {
  return <IonButton className='ion-float-end'>{text}</IonButton>;
};

type IProps = {
  className?: string;
};

const LiveCodeEditor: React.FC<IProps> = ({ className }) => {
  const code = `<ExampleButton text="test"/>`;
  const scope = { ExampleButton };

  return (
    <LiveProvider className={className} code={code} scope={scope}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};
export default LiveCodeEditor;

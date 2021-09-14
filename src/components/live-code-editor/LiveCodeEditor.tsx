import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { IonButton } from '@ionic/react';

export const ExampleButton: React.FC = () => {
  return <IonButton className='ion-float-end'>Example button!</IonButton>;
};

type IProps = {
  className?: string;
};

const LiveCodeEditor: React.FC<IProps> = ({ className }) => {
  const code = `<ExampleButton/>`;
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

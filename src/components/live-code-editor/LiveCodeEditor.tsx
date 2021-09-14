import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

type IProps = {
  className?: string;
};

const LiveCodeEditor: React.FC<IProps> = ({ className }) => {
  return (
    <LiveProvider className={className} code='<strong>Hello World!</strong>'>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};
export default LiveCodeEditor;

import React from 'react';

type IProps = {
  className?: string;
};

const LiveCodeEditor: React.FC<IProps> = ({ className }) => {
  return <div className={className}>Ship and run</div>;
};
export default LiveCodeEditor;

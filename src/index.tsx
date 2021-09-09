import React from 'react';
import drawing from './Drawing';
import png from 'assets/cropped-robot.png'; // Path to img must not be relative "./".

interface Props {
  text: string;
}

export const ExampleComponent: React.FC<Props> = ({ text }: Props) => {
  return (
    <div className={`glass-bg shadow-xl rounded m-2`}>
      Example Component: {text}
      {drawing}
      <img src={png} height={200} width={200} alt='test' />
    </div>
  );
};

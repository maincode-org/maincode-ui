import React from 'react';

type IProps = {
  className?: string;
};

const ParticleContainer: React.FC<IProps> = ({ className = '' }) => {
  return <p>hi {className}</p>;
};
export default ParticleContainer;

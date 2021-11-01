import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import config from './lean-particlesjs-config';
import styles from './maincode-website.module.css';

type IProps = {
  className?: string;
};

const ParticleContainer: React.FC<IProps> = ({ className = '' }) => {
  const [particleConfig, setParticleConfig] = useState(config);

  // HACK: update the object after first rendering, to spread out the particles and prevent them raining down..
  useEffect(() => {
    setTimeout(() => setParticleConfig({ ...particleConfig, move: { ...particleConfig.move, speed: 0.3 } }), 200);
  }, [particleConfig]);

  return <Particles className={className} canvasClassName={styles.backgroundParticles} params={particleConfig} />;
};
export default ParticleContainer;

import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import config from './lean-particlesjs-config';
import styles from './maincode-website.module.css';

type IProps = {
  className?: string;
};

const ParticleContainer: React.FC<IProps> = ({ className = '' }) => {
  const [particleConfig, setParticleConfig] = useState<typeof config | undefined>(undefined);

  // HACK: update the object after first rendering, to spread out the particles and prevent them raining down. Cause of bug unknown.
  useEffect(() => {
    setTimeout(() => setParticleConfig(config), 100);
  }, []);

  return <div>{particleConfig && <Particles className={className} canvasClassName={styles.backgroundParticles} params={particleConfig} />}</div>;
};
export default ParticleContainer;

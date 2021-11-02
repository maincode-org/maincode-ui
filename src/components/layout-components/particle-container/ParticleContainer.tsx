import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import config from './lean-particlesjs-config';
import styles from './maincode-website.module.css';

type IProps = {
  className?: string;
};

const ParticleContainer: React.FC<IProps> = ({ className = '', children }) => {
  const [particleConfig, setParticleConfig] = useState<typeof config | undefined>(undefined);

  // HACK: update the object after first rendering, to spread out the particles and prevent them raining down. Cause of bug unknown.
  useEffect(() => {
    setTimeout(() => setParticleConfig(config), 300);
  }, []);

  return (
    <section>
      <div className={`${className} ${styles.backgroundParticles}`}>
        {particleConfig && <Particles className={styles.animation} canvasClassName={styles.backgroundParticles} params={particleConfig} />}
      </div>
      <div className={styles.children}>{children}</div>
    </section>
  );
};
export default ParticleContainer;

import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import config from './lean-particlesjs-config';
import styles from './maincode-website.module.css';

type IProps = {
  particleConfig?: Record<string, any>;
  className?: string;
};

const ParticleContainer: React.FC<IProps> = ({ particleConfig = config, className = '', children }) => {
  const [internalConfig, setInternalConfig] = useState<Record<string, any> | undefined>(undefined);

  // HACK: update the object after first rendering, to spread out the particles and prevent them raining down. Cause of bug unknown.
  useEffect(() => {
    setTimeout(() => setInternalConfig(particleConfig), 300);
  }, [particleConfig]);

  return (
    <section>
      <div className={`${className} ${styles.backgroundParticles}`}>
        {internalConfig && <Particles className={styles.animation} canvasClassName={styles.backgroundParticles} params={internalConfig} />}
      </div>
      <div className={styles.children}>{children}</div>
    </section>
  );
};
export default ParticleContainer;

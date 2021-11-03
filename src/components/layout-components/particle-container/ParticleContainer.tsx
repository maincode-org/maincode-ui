import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import config from './lean-particlesjs-config';
import styles from './particle-container.module.css';

type IProps = {
  isAnimationEnabled?: boolean;
  particleConfig?: Record<string, any>;
  className?: string;
};

const ParticleContainer: React.FC<IProps> = ({ isAnimationEnabled = true, particleConfig = config, className = '', children }) => {
  const [internalConfig, setInternalConfig] = useState<Record<string, any> | undefined>(undefined);

  // HACK: update the object after first rendering, to spread out the particles and prevent them raining down. Cause of bug unknown.
  useEffect(() => {
    setTimeout(() => setInternalConfig(particleConfig), 300);
  }, [particleConfig]);

  return (
    <section className='h-full w-full'>
      <div className={`${className} ${styles.backgroundParticles}`}>
        {internalConfig && isAnimationEnabled && <Particles className={styles.animation} canvasClassName={styles.backgroundParticles} params={internalConfig} />}
      </div>
      <div className={styles.children}>{children}</div>
    </section>
  );
};
export default ParticleContainer;

import React, { ReactElement, useEffect, useState } from 'react';
import styles from './simulation-container.module.css';

type IProps = {
  id: string;
  enableFullscreen?: boolean;
  className?: string;
  children?: ReactElement | ReactElement[];
};

const SimulationContainer = React.forwardRef<HTMLElement, IProps>(({ id, enableFullscreen = false, className = '', children }, ref) => {
  console.log(enableFullscreen);
  const [dim, setDim] = useState(0);
  const [hasPaintedSection, setHasPaintedSection] = useState(false);
  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const ref = document.querySelector(`#${id}`) as HTMLElement;
    if (!ref) return;
    const resizeObserver = new ResizeObserver(() => setHasPaintedSection(true));
    resizeObserver.observe(ref);
    setSectionRef(ref);
  }, [id]);

  useEffect(() => {
    if (!sectionRef || !hasPaintedSection) return;
    const leastDim = sectionRef.clientWidth > sectionRef.clientHeight ? sectionRef.clientWidth : sectionRef.clientHeight;
    setDim(leastDim);
  }, [sectionRef, hasPaintedSection]);

  return (
    <section id={id} ref={ref} style={{ height: `${dim}px`, width: `${dim}px` }} className={`${className} ${styles.container} w-full h-full inline-block relative`}>
      {children}
    </section>
  );
});
export default SimulationContainer;

import React, { useEffect, useRef, useState } from 'react';
import styles from './simulation-container.module.css';

type IProps = {
  id: string;
  onLoad?: (ref: HTMLElement) => void;
  backgroundColor?: string;
  className?: string;
  children?: React.ReactElement | (React.ReactElement | undefined)[];
};

const SimulationContainer: React.FC<IProps> = ({ id, onLoad, backgroundColor, className = '', children }) => {
  const [dim, setDim] = useState(0);
  const [hasPaintedSection, setHasPaintedSection] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const resizeObserver = new ResizeObserver(() => setHasPaintedSection(true));
    resizeObserver.observe(sectionRef.current);
  }, [sectionRef]);

  useEffect(() => {
    if (!sectionRef.current || !hasPaintedSection) return;
    const largestDim = sectionRef.current.clientWidth > sectionRef.current.clientHeight ? sectionRef.current.clientWidth : sectionRef.current.clientHeight;
    setDim(largestDim);
    onLoad?.(sectionRef.current);
  }, [hasPaintedSection, onLoad]);

  return (
    <section
      id={id}
      ref={sectionRef}
      style={{ maxHeight: `${dim}px`, height: `${dim}px`, maxWidth: `${dim}px`, width: `${dim}px`, backgroundColor: backgroundColor ?? '#ffffff' }}
      className={`${className} ${styles.container} inline-block relative`}
    >
      {children}
    </section>
  );
};
export default SimulationContainer;

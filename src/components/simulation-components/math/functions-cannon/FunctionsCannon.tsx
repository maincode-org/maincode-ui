import React from 'react';
import styles from './functions-cannon.module.css';
import drawing from './Drawing';
import { useEffect, useRef, useState } from 'react';
import { Animation } from '@ionic/react';
import { createAnimation } from '@ionic/core';
import SimulationContainer from '../../simulation-container/SimulationContainer';
import { applyCannonStyle, drawFunction, drawPlot, drawPlotPoint, enhanceCanvasQuality, IAxisOptions, IPlotConfig } from './helpers';
import { linearFunction } from './math-lib';

type IProps = {
  id: string;
  className?: string;
};

const FunctionsCannon: React.FC<IProps> = ({ id, className = '' }) => {
  const [hasPaintedSection, setHasPaintedSection] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const resizeObserver = new ResizeObserver(() => setHasPaintedSection(true));
    resizeObserver.observe(sectionRef.current);
  }, [sectionRef]);

  useEffect(() => {
    if (!hasPaintedSection) return;

    const cannon: SVGSVGElement = sectionRef.current?.querySelector('svg') as SVGSVGElement;
    const cannonBody: HTMLElement = sectionRef.current?.querySelector(`.${styles.cannonBody}`) as HTMLElement;
    if (!cannonBody) return;

    applyCannonStyle(cannon);

    const animation: Animation = createAnimation().addElement(cannonBody).duration(2000).fromTo('transform', 'rotateZ(0deg)', 'rotateZ(45deg)');
    animation.play();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = enhanceCanvasQuality(canvas, sectionRef.current?.clientWidth ?? 0, 80, 80);

    const axisOptions: IAxisOptions = {
      x: {
        fromValue: 0,
        toValue: 10,
      },
      y: {
        fromValue: 0,
        toValue: 10,
      },
    };

    if (context) {
      const plot: IPlotConfig = drawPlot(context, axisOptions);

      drawPlotPoint(plot, { x: 2, y: 4 }, context);
      drawFunction(plot, linearFunction(2, 0), context);
      drawFunction(plot, linearFunction(1, 2), context, 'rgb(148,16,126)');
    }
  }, [hasPaintedSection]);
  return (
    <SimulationContainer className={className} id={id} ref={sectionRef}>
      {drawing}
      <canvas className={styles.canvas} ref={canvasRef} />
    </SimulationContainer>
  );
};
export default FunctionsCannon;

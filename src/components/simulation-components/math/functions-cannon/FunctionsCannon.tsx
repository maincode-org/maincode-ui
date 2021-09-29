import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './functions-cannon.module.css';
import Cannon from './Cannon';
import cannonBall from './CannonBall';
import gsap from 'gsap';
import SimulationContainer from '../../simulation-container/SimulationContainer';
import { applyCannonBallStyle, applyCannonStyle, applyCannonWheelStyle, drawFunction, drawPlot, drawPlotPoint, enhanceCanvasQuality, IAxisOptions, IPlotConfig } from './helpers';
import { linearFunction } from './math-lib';
import { EThemeModes, ThemeContext } from 'contexts/theme';

type IProps = {
  id: string;
  className?: string;
};

const FunctionsCannon: React.FC<IProps> = ({ id, className = '' }) => {
  const [hasPaintedSection, setHasPaintedSection] = useState(false);
  const [sectionElement, setSectionElement] = useState<HTMLElement>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (!sectionElement || !hasPaintedSection) return;

    const cannon: SVGSVGElement = sectionElement.querySelector('#cannon') as SVGSVGElement;
    const cannonBall: SVGSVGElement = sectionElement.querySelector('#cannonBall') as SVGSVGElement;
    const cannonWheel: SVGSVGElement = sectionElement.querySelector('#wheel') as SVGSVGElement;

    const cannonBodySelector = `.${styles.cannonBody}`;

    applyCannonStyle(cannon);
    applyCannonBallStyle(cannonBall);
    applyCannonWheelStyle(cannonWheel);

    const animationTimeline = gsap.timeline();
    animationTimeline.to(cannonBodySelector, { duration: 2, transform: 'rotateZ(45deg)' });
    animationTimeline.to(cannonBall, { duration: 3, x: sectionElement.clientWidth * 0.06, y: -sectionElement.clientHeight * 0.1 });
    animationTimeline.to(cannonWheel, { duration: 1, transform: 'rotateZ(-60deg)' }, '<');
    animationTimeline.to(cannonBodySelector, { duration: 1, transform: 'rotateZ(-1deg)' }, '<');
    animationTimeline.to(cannonBodySelector, { duration: 1, x: -40 }, '<');

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = enhanceCanvasQuality(canvas, sectionElement.clientWidth ?? 0, 80, 80);

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
      const plot: IPlotConfig = drawPlot(context, axisOptions, theme?.themeName === EThemeModes.dark);

      drawPlotPoint(plot, { x: 2, y: 4 }, context);
      drawFunction(plot, linearFunction(2, 0), context);
      drawFunction(plot, linearFunction(1, 2), context, 'rgb(148,16,126)');
    }
  }, [sectionElement, hasPaintedSection, theme]);

  const onSectionPaint = (sectionElement: HTMLElement) => {
    setSectionElement(sectionElement);
    setHasPaintedSection(true);
  };

  return (
    <SimulationContainer className={className} id={id} onLoad={onSectionPaint}>
      <Cannon isDarkMode={theme?.themeName === 'dark'} />
      {cannonBall}
      <canvas className={styles.canvas} ref={canvasRef} />
    </SimulationContainer>
  );
};
export default FunctionsCannon;

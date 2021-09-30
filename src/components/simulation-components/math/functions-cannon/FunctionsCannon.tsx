import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './functions-cannon.module.css';
import Cannon from './Cannon';
import cannonBall from './CannonBall';
import gsap from 'gsap';
import SimulationContainer from '../../simulation-container/SimulationContainer';
import { initCannonBall, initCannon, applyCannonWheelStyle, drawFunction, drawPlot, drawPlotPoint, enhanceCanvasQuality, IAxisOptions, IPlotConfig } from './helpers';
import { linearFunction, throwParabolaFunction } from './math-lib';
import { EThemeModes, ThemeContext } from 'contexts/theme';
import { IonButton } from '@ionic/react';

type IProps = {
  id: string;
  className?: string;
};

const FunctionsCannon: React.FC<IProps> = ({ id, className = '' }) => {
  const [hasPaintedSection, setHasPaintedSection] = useState(false);
  const [sectionElement, setSectionElement] = useState<HTMLElement>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cannonBallRef, setCannonBallRef] = useState<SVGSVGElement>();
  const [cannonWheel, setCannonWheel] = useState<SVGSVGElement>();
  const [cannonAnimation, setCannonAnimation] = useState<gsap.core.Timeline>();
  const [cannonBallAnimation, setCannonBallAnimation] = useState<gsap.core.Timeline>();
  const theme = useContext(ThemeContext);

  const cannonBodySelector = `.${styles.cannonBody}`;

  useEffect(() => {
    if (!sectionElement || !hasPaintedSection) return;

    const cannon: SVGSVGElement = sectionElement.querySelector('#cannon') as SVGSVGElement;
    const cannonBall: SVGSVGElement = sectionElement.querySelector('#cannonBall') as SVGSVGElement;
    const cannonWheel: SVGSVGElement = sectionElement.querySelector('#wheel') as SVGSVGElement;

    setCannonBallRef(cannonBall);
    setCannonWheel(cannonWheel);

    initCannon(cannon);
    initCannonBall(cannonBall);
    applyCannonWheelStyle(cannonWheel);

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

      drawFunction(plot, linearFunction(2, 0), context);
      drawFunction(plot, linearFunction(1, 2), context, 'rgb(148,16,126)');
      drawFunction(plot, throwParabolaFunction(-0.01, 2), context, 'rgb(200,20,220)');
      drawPlotPoint(plot, { x: 2, y: 4 }, context);

      if (cannonBallRef) {
        setCannonAnimation(createCannonAnimation(cannonBodySelector, cannonWheel));
        setCannonBallAnimation(createFollowFnAnimation(cannonBallRef, plot, throwParabolaFunction(-0.01, 2)));
      }
    }
  }, [sectionElement, hasPaintedSection, theme, cannonBallRef, cannonBodySelector]);

  const onSectionPaint = (sectionElement: HTMLElement) => {
    setSectionElement(sectionElement);
    setHasPaintedSection(true);
  };

  const createCannonAnimation = (cannonBody: string, cannonWheel: SVGSVGElement): gsap.core.Timeline => {
    const animationTimeline = gsap.timeline();
    animationTimeline.fromTo(cannonWheel, { transform: 'rotateZ(0deg)' }, { duration: 0.5, transform: 'rotateZ(-45deg)' });
    animationTimeline.fromTo(cannonBody, { transform: 'rotateZ(45deg)' }, { duration: 0.5, x: -40, transform: 'rotateZ(30deg)' }, '<');
    animationTimeline.pause();
    return animationTimeline;
  };

  const createFollowFnAnimation = (cannonBall: SVGSVGElement, plot: IPlotConfig, fn: (x: number) => number) => {
    const animationTimeline = gsap.timeline();
    animationTimeline.to(cannonBall, { display: 'inline' });

    let currentX = 0;

    for (let x = 0; x <= plot.canvasWidth - (plot.offset.left + plot.offset.right); x++) {
      animationTimeline.fromTo(cannonBall, { x: currentX, y: -fn(currentX) }, { duration: 0.1, x: (currentX += 2), y: -fn(currentX) });
    }
    animationTimeline.pause();
    return animationTimeline;
  };

  const playAnimation = (timeline1: gsap.core.Timeline | undefined, timeline2: gsap.core.Timeline | undefined) => {
    if (!timeline1 || !timeline2) return;
    const masterTimeline = gsap.timeline();
    masterTimeline.add(timeline1.restart()).add(timeline2.restart(), '<');
  };

  return (
    <SimulationContainer className={className} id={id} onLoad={onSectionPaint}>
      <Cannon isDarkMode={theme?.themeName === 'dark'} />
      {cannonBall}
      <p className={`${styles.functionText} p-05 m-0 glass-bg rounded`}>f(x) = -0.01x^2+2x+3</p>
      {cannonBallRef && cannonWheel && sectionElement && (
        <IonButton className={`${styles.playButton}`} onClick={() => playAnimation(cannonAnimation, cannonBallAnimation)}>
          Afspil
        </IonButton>
      )}
      <canvas className={styles.canvas} ref={canvasRef} />
    </SimulationContainer>
  );
};
export default FunctionsCannon;

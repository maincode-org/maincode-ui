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

      const yPxFromBorder = sectionElement.clientHeight * 0.175;

      const borderYToAxis = sectionElement.clientHeight - (canvas.clientHeight - plot.offset.bottom);

      const yPxFromPlot = borderYToAxis - yPxFromBorder;
      console.log(yPxFromPlot);

      // https://en.wikipedia.org/wiki/Quadratic_equation
      // "Solving quadratic functions with complete square algorithm"
      // ax^2 + x + c = y
      // 1:  x^2 + b / a * x + c/a = y/a
      // 2:  x^2 + b / a * x = y/a - c/a
      // 3:  x^2 + b / a * x + (b / a) / 2 = y/a - c/a + (b / a) / 2
      // 4:  (x + (b / a) / 2)^2 = y/a - c/a + (b / a) / 2
      // 5:  x + (b / a) / 2 = sqrt(y/a - c/a + (b / a) / 2)
      // 6:  x = - (b / a) / 2 +- sqrt(y/a - c/a + (b / a) / 2)

      /*
      const a = -0.01;
      const b = 1;
      const c = 2;
       */
      const y = yPxFromPlot;

      const xForInitialY = -41;

      // const xForInitialY = -(b / a / 2) - Math.sqrt(y / a - c / a + b / a / 2);

      const borderXToAxis = sectionElement.clientWidth - (canvas.clientWidth - plot.offset.left);
      const xFromBorder = borderXToAxis + xForInitialY;

      console.log('Initial pos: ', xForInitialY, y);
      console.log('Initial pos calced: ', xForInitialY, throwParabolaFunction(-0.01, 2)(xForInitialY));

      console.log('from plot', xFromBorder, yPxFromPlot);
      initCannonBall(cannonBall, plot, xFromBorder, yPxFromBorder);

      drawFunction(plot, linearFunction(2, 0), context);
      drawFunction(plot, linearFunction(1, 2), context, 'rgb(148,16,126)');
      drawFunction(plot, throwParabolaFunction(-0.01, 2), context, 'rgb(200,20,220)');
      drawPlotPoint(plot, { x: 2, y: 4 }, context);

      if (cannonBallRef) {
        setCannonAnimation(createCannonAnimation(cannonBodySelector, cannonWheel));
        setCannonBallAnimation(createFollowFnAnimation(cannonBallRef, plot, throwParabolaFunction(-0.01, 2), xForInitialY, borderXToAxis, borderYToAxis));
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

  const createFollowFnAnimation = (cannonBall: SVGSVGElement, plot: IPlotConfig, fn: (x: number) => number, xFrom = 0, borderAxisDistX = 0, borderAxisDistY = 0) => {
    const animationTimeline = gsap.timeline();
    animationTimeline.to(cannonBall, { display: 'inline' });

    let currentX = xFrom;

    console.log('borderAxisDistX', borderAxisDistX);
    console.log('borderAxisDistY', borderAxisDistY);
    console.log('borderAxisDistX + currentX', borderAxisDistX + currentX);
    console.log('borderAxisDistY + -fn(currentX)', borderAxisDistY - fn(currentX));

    for (let x = xFrom; x <= plot.canvasWidth - (plot.offset.left + plot.offset.right); x++) {
      animationTimeline.fromTo(
        cannonBall,
        { x: borderAxisDistX + currentX, y: borderAxisDistY - fn(currentX) },
        { duration: 0.025, x: borderAxisDistX + ++currentX, y: borderAxisDistY - fn(currentX) }
      );
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

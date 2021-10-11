import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './functions-cannon.module.css';
import Cannon from './Cannon';
import gsap from 'gsap';
import SimulationContainer from '../../simulation-container/SimulationContainer';
import { initCannon, applyCannonWheelStyle, drawFunction, drawPlot, enhanceCanvasQuality, IAxisOptions, IPlotConfig, initCannonBall } from './helpers';
import { throwParabolaFunction } from './math-lib';
import { EThemeModes, ThemeContext } from 'contexts/theme';
import { IonButton, IonIcon } from '@ionic/react';
import { playOutline } from 'ionicons/icons';
import MathLive from '../../../basic-components/math-live/MathLive';

type ICoord = {
  x: number;
  y: number;
};

type IPos = ICoord;

type IProps = {
  id: string;
  className?: string;
};

const FunctionsCannon: React.FC<IProps> = ({ id, className = '' }) => {
  const [hasPaintedSection, setHasPaintedSection] = useState(false);
  const [sectionElement, setSectionElement] = useState<HTMLElement>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cannonWheel, setCannonWheel] = useState<SVGSVGElement>();
  const [cannonAnimation, setCannonAnimation] = useState<gsap.core.Timeline>();
  const [cannonBallAnimation, setCannonBallAnimation] = useState<gsap.core.Timeline>();
  const [cannonBall, setCannonBall] = useState<HTMLElement>();
  const [parabolaInputValues, setParabolaInputValues] = useState<(string | undefined)[]>();

  const theme = useContext(ThemeContext);

  const cannonBodySelector = `.${styles.cannonBody}`;

  useEffect(() => {
    if (!sectionElement || !hasPaintedSection) return;

    const cannon: SVGSVGElement = sectionElement.querySelector('#cannon') as SVGSVGElement;
    const cannonWheel: SVGSVGElement = sectionElement.querySelector('#wheel') as SVGSVGElement;

    setCannonWheel(cannonWheel);

    initCannon(cannon);
    applyCannonWheelStyle(cannonWheel);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = enhanceCanvasQuality(canvas, sectionElement.clientWidth ?? 0, 82, 82);

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

      const bottomToXAxis = sectionElement.clientHeight - (canvas.clientHeight - plot.offset.bottom);
      const leftToYAxis = sectionElement.clientWidth - (canvas.clientWidth - plot.offset.left);

      const initialBallPos: IPos = {
        x: 0,
        y: sectionElement.clientHeight * 0.145,
      };

      const initialBallCoord: ICoord = {
        x: 0,
        y: -(bottomToXAxis - initialBallPos.y) / plot.stepWidth.y,
      };

      // https://en.wikipedia.org/wiki/Quadratic_equation
      // "Solving quadratic functions with complete square algorithm"
      // ax^2 + x + c = y
      // 1:  x^2 + b / a * x + c/a = y/a
      // 2:  x^2 + b / a * x = y/a - c/a
      // 3:  x^2 + b / a * x + (b / a) / 2 = y/a - c/a + (b / a) / 2
      // 4:  (x + (b / a) / 2)^2 = y/a - c/a + (b / a) / 2
      // 5:  x + (b / a) / 2 = sqrt(y/a - c/a + (b / a) / 2)
      // 6:  x = - (b / a) / 2 +- sqrt(y/a - c/a + (b / a) / 2)

      const a = -0.2;
      const b = 1;
      const c = 3;
      const y = initialBallCoord.y;

      initialBallCoord.x = -(b / a / 2) - Math.sqrt(y / a - c / a + b / a / 2); // calculates x for initial y.
      initialBallPos.x = leftToYAxis + initialBallCoord.x * plot.stepWidth.x;

      const cannonBallRef: HTMLElement = sectionElement.querySelector('#cannonBall') as HTMLElement;
      if (!cannonBall && cannonBallRef) setCannonBall(cannonBallRef);
      if (!cannonBall) return;
      initCannonBall(cannonBall);

      /** Initial coord */
      const initialCoord: HTMLElement = sectionElement.querySelector('#initialCoord') as HTMLElement;
      initialCoord.style.position = 'absolute';
      initialCoord.style.fontSize = '8px';
      initialCoord.style.top = '5%';
      initialCoord.style.left = '0';
      initialCoord.innerText = `coord: (${initialBallCoord.x.toFixed(0)}, ${initialBallCoord.y.toFixed(0)})`;

      /** Current coord */
      const currentCoord: HTMLElement = sectionElement.querySelector('#currentCoord') as HTMLElement;
      currentCoord.style.position = 'absolute';
      currentCoord.style.fontSize = '8px';
      currentCoord.style.top = '0';
      currentCoord.style.left = '0';
      currentCoord.innerText = `coord: (${initialBallCoord.x.toFixed(0)}, ${throwParabolaFunction(-0.2, 3)(initialBallCoord.x).toFixed(0)})`;

      console.log('Initial coord: ', initialBallCoord);

      console.log('pos', initialBallPos.x, initialBallPos.y);

      drawFunction(plot, throwParabolaFunction(-0.2, 3), context, 'rgb(200,20,220)');

      setCannonAnimation(createCannonAnimation(cannonBodySelector));

      console.log('parabola input', parabolaInputValues?.[0], parabolaInputValues?.[1]);
      parabolaInputValues?.[0] &&
        parabolaInputValues?.[1] &&
        setCannonBallAnimation(
          createFollowFnAnimation(cannonBall, plot, throwParabolaFunction(Number(parabolaInputValues[0]), Number(parabolaInputValues[1])), initialBallCoord, leftToYAxis, bottomToXAxis, 1.5)
        );
    }
  }, [sectionElement, hasPaintedSection, theme, cannonBall, cannonBodySelector, parabolaInputValues]);

  const onSectionPaint = (sectionElement: HTMLElement) => {
    setSectionElement(sectionElement);
    setHasPaintedSection(true);
  };

  const createCannonAnimation = (cannonBody: string): gsap.core.Timeline => {
    const animationTimeline = gsap.timeline();
    animationTimeline.to(cannonBody, { duration: 0.1, transform: 'rotateZ(-10deg)' });
    animationTimeline.to(cannonBody, { duration: 0.2, transform: 'rotateZ(0deg)' });

    animationTimeline.pause();
    return animationTimeline;
  };

  const createFollowFnAnimation = (cannonBall: HTMLElement, plot: IPlotConfig, fn: (x: number) => number, initialCoord: ICoord, leftToYAxis: number, bottomToXAxis: number, duration: number) => {
    const animationTimeline = gsap.timeline();
    animationTimeline.set(cannonBall, { visibility: 'visible' });
    const stepSize = (plot.axis.x.toValue - plot.axis.x.fromValue) / 100; // visible range of x-values divided by a number of animation steps.
    const speed = duration / (plot.numberOfDashes.x * (stepSize * 100));

    for (let x = initialCoord.x; x <= plot.axis.x.toValue; x += stepSize) {
      if (x > stepSize && fn(x) <= stepSize && fn(x) >= -stepSize) break;
      animationTimeline.fromTo(
        cannonBall,
        { x: leftToYAxis + x * plot.stepWidth.x, y: -(bottomToXAxis + fn(x) * plot.stepWidth.y) },
        { duration: speed, x: leftToYAxis + (x + stepSize) * plot.stepWidth.x, y: -(bottomToXAxis + fn(x + stepSize) * plot.stepWidth.y) }
      );
    }
    animationTimeline.pause();
    cannonBall.style.visibility = 'hidden';
    return animationTimeline;
  };

  const playAnimation = (timeline1: gsap.core.Timeline | undefined, timeline2: gsap.core.Timeline | undefined) => {
    if (!timeline1 || !timeline2 || !cannonBall) return;
    const masterTimeline = gsap.timeline();
    masterTimeline.add(timeline1.restart()).add(timeline2.restart(), '<');
  };

  return (
    <SimulationContainer className={className} id={id} onLoad={onSectionPaint}>
      <Cannon isDarkMode={theme?.themeName === 'dark'} />
      <p id='initialCoord'>(x,y)</p>
      <p id='currentCoord'>(x,y)</p>
      <div id='cannonBall' />
      {cannonWheel && sectionElement && (
        <IonButton className={`${styles.playButton}`} onClick={() => playAnimation(cannonAnimation, cannonBallAnimation)}>
          <IonIcon ios={playOutline} md={playOutline} />
        </IonButton>
      )}
      <MathLive formula='f(x)=-\placeholder{}\cdot x^2+x+\placeholder{}' onChange={(s) => setParabolaInputValues(s)} initialValues={['', '']} />
      <div id='parabolaInput' />
      <canvas className={styles.canvas} ref={canvasRef} />
    </SimulationContainer>
  );
};
export default FunctionsCannon;

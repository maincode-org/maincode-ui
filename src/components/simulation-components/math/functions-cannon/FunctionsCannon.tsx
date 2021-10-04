import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './functions-cannon.module.css';
import Cannon from './Cannon';
import gsap from 'gsap';
import SimulationContainer from '../../simulation-container/SimulationContainer';
import { initCannon, applyCannonWheelStyle, drawFunction, drawPlot, drawPlotPoint, enhanceCanvasQuality, IAxisOptions, IPlotConfig, initCannonBall } from './helpers';
import { linearFunction, throwParabolaFunction } from './math-lib';
import { EThemeModes, ThemeContext } from 'contexts/theme';
import { IonButton } from '@ionic/react';

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
        y: -(bottomToXAxis - initialBallPos.y),
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

      /*
      const a = -0.01;
      const b = 1;
      const c = 2;
       */
      // const y = initialBallCoord.y;

      const xForInitialY = -32.2;
      initialBallCoord.x = xForInitialY;

      // const xForInitialY = -(b / a / 2) - Math.sqrt(y / a - c / a + b / a / 2);

      initialBallPos.x = leftToYAxis + initialBallCoord.x;

      const cannonBall: HTMLElement = sectionElement.querySelector('#cannonBall') as HTMLElement;
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
      currentCoord.innerText = `coord: (${initialBallCoord.x.toFixed(0)}, ${throwParabolaFunction(-0.01, 0)(initialBallCoord.x).toFixed(0)})`;

      console.log('Initial coord: ', initialBallCoord);
      console.log('Initial pos calced: ', xForInitialY, throwParabolaFunction(-0.01, 0)(xForInitialY));

      console.log('from plot', initialBallPos.x, initialBallCoord.y);

      drawFunction(plot, linearFunction(2, 0), context);
      drawFunction(plot, linearFunction(1, 2), context, 'rgb(148,16,126)');
      drawFunction(plot, throwParabolaFunction(-0.01, 0), context, 'rgb(200,20,220)');
      drawPlotPoint(plot, { x: 2, y: 4 }, context);

      setCannonAnimation(createCannonAnimation(cannonBodySelector, cannonWheel));
      setCannonBallAnimation(createFollowFnAnimation(cannonBall, plot, throwParabolaFunction(-0.01, 0), initialBallCoord, leftToYAxis, bottomToXAxis, currentCoord));
    }
  }, [sectionElement, hasPaintedSection, theme, cannonBodySelector]);

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

  const createFollowFnAnimation = (cannonBall: HTMLElement, plot: IPlotConfig, fn: (x: number) => number, initialCoord: ICoord, leftToYAxis: number, bottomToXAxis: number, debugBox?: HTMLElement) => {
    const animationTimeline = gsap.timeline();

    console.log(cannonBall, fn, leftToYAxis, bottomToXAxis, debugBox);

    let currentX = initialCoord.x;

    console.log('coord (x,y)', currentX, fn(currentX));

    for (let x = initialCoord.x; x <= plot.canvasWidth - (plot.offset.left + plot.offset.right); x++) {
      if (currentX > 1 && fn(currentX) <= 1 && fn(currentX) >= -1) break;
      animationTimeline.fromTo(cannonBall, { x: leftToYAxis + currentX, y: -(bottomToXAxis + fn(currentX)) }, { duration: 0.025, x: leftToYAxis + ++currentX, y: -(bottomToXAxis + fn(currentX)) });
      console.log('pos (x,y)', leftToYAxis + currentX, bottomToXAxis + fn(currentX));
      console.log('pos to (x,y)', leftToYAxis + ++currentX, bottomToXAxis + fn(currentX));
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
      <p className={`${styles.functionText} p-05 m-0 glass-bg rounded`}>f(x) = -0.01x^2+2x+3</p>
      <p id='initialCoord'>(x,y)</p>
      <p id='currentCoord'>(x,y)</p>
      <div id='cannonBall' />
      {cannonWheel && sectionElement && (
        <IonButton className={`${styles.playButton}`} onClick={() => playAnimation(cannonAnimation, cannonBallAnimation)}>
          Afspil
        </IonButton>
      )}
      <canvas className={styles.canvas} ref={canvasRef} />
    </SimulationContainer>
  );
};
export default FunctionsCannon;

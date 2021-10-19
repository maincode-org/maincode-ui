import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './functions-cannon.module.css';
import Cannon from './Cannon';
import gsap from 'gsap';
import SimulationContainer from '../../simulation-container/SimulationContainer';
import { initCannon, applyCannonWheelStyle, drawFunction, drawPlot, enhanceCanvasQuality, IAxisOptions, IPlotConfig, initCannonBall, initTestSquare } from './helpers';
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

type ICannonTheme = {
  backgroundColor?: { light: string; dark: string };
  parabolaColor?: { light: string; dark: string };
  playButtonColor?: { light: 'primary' | 'secondary' | 'success'; dark: 'primary' | 'secondary' | 'success' };
  axisColor?: { light: string; dark: string };
};

type IProps = {
  id: string;
  axisOptions?: { x: { from: number; to: number }; y: { from: number; to: number } };
  parabolaValues: { a: number; c: number };
  shouldRevealA: boolean;
  shouldRevealC: boolean;
  theme?: ICannonTheme;
  className?: string;
};

const FunctionsCannon: React.FC<IProps> = ({ id, axisOptions, parabolaValues, shouldRevealA, shouldRevealC, theme, className = '' }) => {
  const [hasPaintedSection, setHasPaintedSection] = useState(false);
  const [sectionElement, setSectionElement] = useState<HTMLElement>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cannonWheel, setCannonWheel] = useState<SVGSVGElement>();
  const [cannonAnimation, setCannonAnimation] = useState<gsap.core.Timeline>();
  const [cannonBallAnimation, setCannonBallAnimation] = useState<gsap.core.Timeline>();
  const [cannonBall, setCannonBall] = useState<HTMLElement>();
  const [parabolaInputValues, setParabolaInputValues] = useState<(string | undefined)[]>([]);

  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext?.themeName === EThemeModes.dark;

  const cannonBodySelector = `.${styles.cannonBody}`;

  useEffect(() => {
    setParabolaInputValues([shouldRevealA ? parabolaValues.a.toString() : undefined, shouldRevealC ? parabolaValues.c.toString() : undefined]);
  }, [parabolaValues]);

  useEffect(() => {
    if (!sectionElement || !hasPaintedSection) return;

    const cannon: SVGSVGElement = sectionElement.querySelector('#cannon') as SVGSVGElement;
    const cannonWheel: SVGSVGElement = sectionElement.querySelector('#wheel') as SVGSVGElement;

    setCannonWheel(cannonWheel);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = enhanceCanvasQuality(canvas, sectionElement.clientWidth ?? 0, 82, 82);

    const axisOptionsValues: IAxisOptions = axisOptions
      ? axisOptions
      : {
          x: {
            from: 0,
            to: 10,
          },
          y: {
            from: 0,
            to: 10,
          },
        };

    if (context) {
      const plot: IPlotConfig = drawPlot(context, axisOptionsValues, isDarkMode, theme?.axisColor);

      const bottomToXAxis = sectionElement.clientHeight - (canvas.clientHeight - plot.offset.bottom);
      const leftToYAxis = sectionElement.clientWidth - (canvas.clientWidth - plot.offset.left);

      const initialBallPos: IPos = {
        x: 0,
        y: sectionElement.clientHeight * 0.145,
      };

      const initialBallCoord: ICoord = {
        x: 0,
        y: -(bottomToXAxis - initialBallPos.y) / (plot.stepWidth.y / plot.stepValue.y) + plot.axis.y.from,
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

      const a = parabolaValues.a;
      const b = 1;
      const c = parabolaValues.c;
      const y = initialBallCoord.y;

      initialBallCoord.x = -(b / a / 2) - Math.sqrt(y / a - c / a + b / a / 2); // calculates x for initial y.
      initialBallPos.x = leftToYAxis + (initialBallCoord.x - plot.axis.x.from) * (plot.stepWidth.x / plot.stepValue.x);

      // Visual test object for debugging
      const testSquare: HTMLDivElement = sectionElement.querySelector('#test') as HTMLDivElement;
      initTestSquare(testSquare, initialBallPos.x, initialBallPos.y);

      const cannonBallRef: HTMLElement = sectionElement.querySelector('#cannonBall') as HTMLElement;
      if (!cannonBall && cannonBallRef) setCannonBall(cannonBallRef);
      if (!cannonBall) return;
      initCannonBall(cannonBall);

      initCannon(cannon, initialBallPos);
      applyCannonWheelStyle(cannonWheel);

      drawFunction(
        plot,
        throwParabolaFunction(parabolaValues.a, parabolaValues.c),
        context,
        !theme?.parabolaColor ? 'rgb(200,20,220)' : isDarkMode ? theme?.parabolaColor.dark : theme?.parabolaColor.light
      );

      setCannonAnimation(createCannonAnimation(cannonBodySelector));

      parabolaInputValues?.[0] &&
        parabolaInputValues?.[1] &&
        setCannonBallAnimation(
          createFollowFnAnimation(cannonBall, plot, throwParabolaFunction(Number(parabolaInputValues[0]), Number(parabolaInputValues[1])), initialBallCoord, leftToYAxis, bottomToXAxis, 1.5)
        );
    }
  }, [sectionElement, hasPaintedSection, themeContext, cannonBall, cannonBodySelector, parabolaInputValues]);

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

    const stepSize = (plot.axis.x.to - plot.axis.x.from) / 100; // visible range of x-values divided by a number of animation steps.
    const speed = duration / (plot.numberOfDashes.x * (stepSize * 100));

    for (let x = initialCoord.x; x <= plot.axis.x.to; x += stepSize) {
      if (x > plot.axis.x.to || fn(x) > plot.axis.y.to || (x > plot.axis.x.from && fn(x) < plot.axis.y.from)) break;
      animationTimeline.fromTo(
        cannonBall,
        { x: leftToYAxis + (x - plot.axis.x.from) * (plot.stepWidth.x / plot.stepValue.x), y: -(bottomToXAxis + (fn(x) - plot.axis.y.from) * (plot.stepWidth.y / plot.stepValue.y)) },
        {
          duration: speed,
          x: leftToYAxis + (x + stepSize - plot.axis.x.from) * (plot.stepWidth.x / plot.stepValue.x),
          y: -(bottomToXAxis + (fn(x + stepSize) - plot.axis.y.from) * (plot.stepWidth.y / plot.stepValue.y)),
        }
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

  const onMathInputChange = (inputs: (string | undefined)[]) => {
    if (inputs.length === 1 && shouldRevealA) setParabolaInputValues([parabolaValues.a.toString(), inputs[0]]);
    else if (inputs.length === 1 && shouldRevealC) setParabolaInputValues([inputs[0], parabolaValues.c.toString()]);
    else setParabolaInputValues(inputs);
  };

  return (
    <SimulationContainer className={className} backgroundColor={isDarkMode ? theme?.backgroundColor?.dark : theme?.backgroundColor?.light} id={id} onLoad={onSectionPaint}>
      <Cannon isDarkMode={themeContext?.themeName === 'dark'} />
      <div id='test' />
      <div id='cannonBall' />
      {cannonWheel && sectionElement && (
        <IonButton
          className={`${styles.playButton}`}
          color={isDarkMode ? theme?.playButtonColor?.dark : theme?.playButtonColor?.light}
          onClick={() => playAnimation(cannonAnimation, cannonBallAnimation)}
        >
          <IonIcon ios={playOutline} md={playOutline} />
        </IonButton>
      )}
      <MathLive
        className={styles.mathLive}
        formula='f(x)=\placeholder{}\cdot x^2+x+\placeholder{}'
        onChange={onMathInputChange}
        answerValues={[
          { value: parabolaValues.a, shouldReveal: shouldRevealA },
          { value: parabolaValues.c, shouldReveal: shouldRevealC },
        ]}
      />
      <div id='parabolaInput' />
      <canvas className={styles.canvas} ref={canvasRef} />
    </SimulationContainer>
  );
};
export default FunctionsCannon;

import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './functions-cannon.module.css';
import Cannon from './Cannon';
import SimulationContainer from '../../simulation-container/SimulationContainer';
import { initCannon, applyCannonWheelStyle, initCannonBall, initTestSquare } from './style-helpers';
import { MathToolkit } from '../../../../toolkits/math';
import { EThemeModes, ThemeContext } from 'contexts/theme';
import { IonButton, IonIcon } from '@ionic/react';
import { playOutline } from 'ionicons/icons';
import MathLive from '../../../basic-components/math-live/MathLive';
import { drawPlot, drawFunction, enhanceCanvasQuality } from '../drawing-lib';
import { IAxisOptions, ICoord, IPlotConfig } from '../types';
import { createCannonAnimation, createFollowFnAnimation, playAnimation } from '../animation-lib';

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

      initialBallCoord.x = MathToolkit.parabola.solveFnGivenY({ a: parabolaValues.a, b: 1, c: parabolaValues.c }, initialBallCoord.y); // calculates x for initial y.
      initialBallPos.x = leftToYAxis + (initialBallCoord.x - plot.axis.x.from) * (plot.stepWidth.x / plot.stepValue.x);

      /* ----------- Visual test object for debugging ---------- */
      const testSquare: HTMLDivElement = sectionElement.querySelector('#test') as HTMLDivElement;
      initTestSquare(testSquare, initialBallPos.x, initialBallPos.y, false);
      /* ------------------------------------------------------- */

      const cannonBallRef: HTMLElement = sectionElement.querySelector('#cannonBall') as HTMLElement;
      if (!cannonBall && cannonBallRef) setCannonBall(cannonBallRef);
      if (!cannonBall) return;
      initCannonBall(cannonBall);

      initCannon(cannon, initialBallPos);
      applyCannonWheelStyle(cannonWheel);

      drawFunction(
        plot,
        MathToolkit.parabola.throw.makeFn({ a: parabolaValues.a, c: parabolaValues.c }),
        context,
        !theme?.parabolaColor ? 'rgb(200,20,220)' : isDarkMode ? theme?.parabolaColor.dark : theme?.parabolaColor.light
      );

      setCannonAnimation(createCannonAnimation(cannonBodySelector));

      parabolaInputValues?.[0] &&
        parabolaInputValues?.[1] &&
        setCannonBallAnimation(
          createFollowFnAnimation(
            cannonBall,
            plot,
            MathToolkit.parabola.throw.makeFn({ a: Number(parabolaInputValues[0]), c: Number(parabolaInputValues[1]) }),
            initialBallCoord,
            leftToYAxis,
            bottomToXAxis,
            1.5
          )
        );
    }
  }, [sectionElement, hasPaintedSection, themeContext, cannonBall, cannonBodySelector, parabolaInputValues]);

  const onSectionPaint = (sectionElement: HTMLElement) => {
    setSectionElement(sectionElement);
    setHasPaintedSection(true);
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
          onClick={() => playAnimation(cannonBall, cannonAnimation, cannonBallAnimation)}
        >
          <IonIcon ios={playOutline} md={playOutline} />
        </IonButton>
      )}
      <MathLive
        className={styles.mathLive}
        formula='f(x)=\placeholder{}\cdot x^2+x+\placeholder{}'
        onChange={onMathInputChange}
        answerValues={[
          { value: parabolaValues.a.toString(), shouldReveal: shouldRevealA },
          { value: parabolaValues.c.toString(), shouldReveal: shouldRevealC },
        ]}
      />
      <div id='parabolaInput' />
      <canvas className={styles.canvas} ref={canvasRef} />
    </SimulationContainer>
  );
};
export default FunctionsCannon;
export type IFunctionCannon = IProps;

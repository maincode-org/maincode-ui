import React, { useContext, useEffect, useState } from 'react';
import styles from './functions-cannon.module.css';
import Cannon from './Cannon';
import SimulationContainer from '../../simulation-container/SimulationContainer';
import { applyCannonWheelStyle, initCannon, initCannonBall, initTestSquare } from './style-helpers';
import { EThemeModes, ThemeContext } from 'contexts/theme';
import { IonButton, IonIcon } from '@ionic/react';
import { playOutline } from 'ionicons/icons';
import MathLive from '../../../basic-components/math-live/MathLive';
import { MathToolkit } from '../../../../toolkits/math';
import { DrawingToolkit, EDrawing, ITheme, Simulation } from '../../../../toolkits/drawing';
import { AnimationToolkit } from '../../../../toolkits/animation';
import { ICoord } from '../types';
import { createCannonAnimation } from './animations';

type IPos = ICoord;

type ICannonTheme = {
  backgroundColor?: { light: string; dark: string };
  parabolaColor?: { light: string; dark: string };
  playButtonColor?: { light: 'primary' | 'secondary' | 'success'; dark: 'primary' | 'secondary' | 'success' };
  axisColor?: { light: string; dark: string };
  textColor?: { light: string; dark: string };
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
  const [cannonWheel, setCannonWheel] = useState<SVGSVGElement>();
  const [cannonAnimation, setCannonAnimation] = useState<gsap.core.Timeline>();
  const [cannonBallAnimation, setCannonBallAnimation] = useState<gsap.core.Timeline>();
  const [cannonBall, setCannonBall] = useState<HTMLElement>();
  const [parabolaInputValues, setParabolaInputValues] = useState<(string | undefined)[]>([]);
  const [simulation, setSimulation] = useState<Simulation>();
  const [initialBallCoord, setInitialBallCoord] = useState<ICoord>();

  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext?.themeName === EThemeModes.dark;

  const cannonBodySelector = `.${styles.cannonBody}`;

  useEffect(() => {
    setParabolaInputValues([shouldRevealA ? parabolaValues.a.toString() : undefined, shouldRevealC ? parabolaValues.c.toString() : undefined]);
  }, [parabolaValues]);

  /** Simulation initializer */
  useEffect(() => {
    if (!sectionElement || !hasPaintedSection || simulation) return;

    const cannon: SVGSVGElement = sectionElement.querySelector('#cannonSVG') as SVGSVGElement;
    const cannonWheel: SVGSVGElement = sectionElement.querySelector('#wheel') as SVGSVGElement;

    setCannonWheel(cannonWheel);

    const localSimulation = DrawingToolkit.makeSimulation(id);
    setSimulation(localSimulation);

    localSimulation.spawnCanvas({ wPct: 82, hPct: 82, className: styles.canvas });
    if (axisOptions) localSimulation.axisOptions = axisOptions;
    const plot = localSimulation.drawPlot();

    const initialBallPos: IPos = {
      x: 0,
      y: sectionElement.clientHeight * 0.145,
    };

    const initialBallCoord: ICoord = {
      x: 0,
      y: -(localSimulation.getBottomToXAxis() - initialBallPos.y) / (plot.stepWidth.y / plot.stepValue.y) + plot.axis.y.from,
    };

    initialBallCoord.x = MathToolkit.parabola.solveFnGivenY({ a: parabolaValues.a, b: 1, c: parabolaValues.c }, initialBallCoord.y); // calculates x for initial y.
    setInitialBallCoord(initialBallCoord);

    initialBallPos.x = localSimulation.getLeftToYAxis() + (initialBallCoord.x - plot.axis.x.from) * (plot.stepWidth.x / plot.stepValue.x);

    /* ----------- Visual test object for debugging ---------- */
    const testSquare: HTMLDivElement = sectionElement.querySelector('#test') as HTMLDivElement;
    initTestSquare(testSquare, initialBallPos.x, initialBallPos.y, false);
    /* ------------------------------------------------------- */

    const cannonBallRef: HTMLElement = sectionElement.querySelector('#cannonBall') as HTMLElement;
    if (!cannonBall && cannonBallRef) setCannonBall(cannonBallRef);
    const localCannonBall = cannonBall ?? cannonBallRef;
    initCannonBall(localCannonBall);

    initCannon(cannon, initialBallPos);
    applyCannonWheelStyle(cannonWheel);

    setCannonAnimation(createCannonAnimation(cannonBodySelector));
  }, [sectionElement, hasPaintedSection, themeContext]);

  /** Calibrate cannonBall path on math input change */
  useEffect(() => {
    const plot = simulation?.getPlotConfig();
    if (!simulation || !cannonBall || !plot || !initialBallCoord) return;
    parabolaInputValues?.[0] &&
      parabolaInputValues?.[1] &&
      setCannonBallAnimation(
        AnimationToolkit.functions.makeFnAnimation(
          cannonBall,
          plot,
          MathToolkit.parabola.throw.makeFn({ a: Number(parabolaInputValues[0]), c: Number(parabolaInputValues[1]) }),
          initialBallCoord,
          simulation.getLeftToYAxis(),
          simulation.getBottomToXAxis(),
          1.5
        )
      );
  }, [simulation, cannonBall, initialBallCoord, parabolaInputValues]);

  /** Redraw when theme changes */
  useEffect(() => {
    if (!simulation) return;

    const localTheme: ITheme = simulation.getTheme();
    if (theme?.axisColor) localTheme.plot.axisColor = theme.axisColor;
    if (theme?.textColor) localTheme.canvas.textColor = theme?.textColor;
    localTheme.isDarkMode = isDarkMode;
    simulation?.setTheme(localTheme);

    simulation.clearDrawingType(EDrawing.FUNCTION);
    simulation.drawFunctionOnPlot({
      fn: MathToolkit.parabola.throw.makeFn({ a: parabolaValues.a, c: parabolaValues.c }),
      color: isDarkMode ? theme?.parabolaColor?.dark : theme?.parabolaColor?.light,
    });
  }, [simulation, theme, isDarkMode, parabolaValues]);

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
          onClick={() => {
            AnimationToolkit.playAnimation(cannonBall, [cannonAnimation, cannonBallAnimation]);
            simulation?.redraw();
          }}
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
    </SimulationContainer>
  );
};
export default FunctionsCannon;
export type IFunctionCannon = IProps;

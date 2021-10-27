import gsap from 'gsap';
import { ICoord, IPlotConfig } from './types';

export const createCannonAnimation = (cannonBody: string): gsap.core.Timeline => {
  const animationTimeline = gsap.timeline();
  animationTimeline.to(cannonBody, { duration: 0.1, transform: 'rotateZ(-10deg)' });
  animationTimeline.to(cannonBody, { duration: 0.2, transform: 'rotateZ(0deg)' });

  animationTimeline.pause();
  return animationTimeline;
};

export const createFollowFnAnimation = (
  cannonBall: HTMLElement,
  plot: IPlotConfig,
  fn: (x: number) => number,
  initialCoord: ICoord,
  leftToYAxis: number,
  bottomToXAxis: number,
  duration: number
): gsap.core.Timeline => {
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

export const playAnimation = (element: HTMLElement | undefined, timeline1: gsap.core.Timeline | undefined, timeline2: gsap.core.Timeline | undefined): void => {
  if (!timeline1 || !timeline2 || !element) return;
  const masterTimeline = gsap.timeline();
  masterTimeline.add(timeline1.restart()).add(timeline2.restart(), '<');
};

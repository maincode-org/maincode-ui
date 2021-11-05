import gsap from 'gsap';
import { ICoord, IPlotConfig } from '../../components/simulation-components/math/types';

export const createCannonAnimation = (cannonBody: string): gsap.core.Timeline => {
  const animationTimeline = gsap.timeline();
  animationTimeline.to(cannonBody, { duration: 0.1, transform: 'rotateZ(-10deg)' });
  animationTimeline.to(cannonBody, { duration: 0.2, transform: 'rotateZ(0deg)' });

  animationTimeline.pause();
  return animationTimeline;
};

export const createFollowFnAnimation = (
  element: HTMLElement,
  plot: IPlotConfig,
  fn: (x: number) => number,
  initialCoord: ICoord,
  leftToYAxis: number,
  bottomToXAxis: number,
  duration: number
): gsap.core.Timeline => {
  const animationTimeline = gsap.timeline();
  animationTimeline.set(element, { visibility: 'visible' });

  const stepSize = (plot.axis.x.to - plot.axis.x.from) / 100; // visible range of x-values divided by a number of animation steps.
  const speed = duration / (plot.numberOfDashes.x * (stepSize * 100));

  for (let x = initialCoord.x; x <= plot.axis.x.to; x += stepSize) {
    if (x > plot.axis.x.to || fn(x) > plot.axis.y.to || (x > plot.axis.x.from && fn(x) < plot.axis.y.from)) break;
    animationTimeline.fromTo(
      element,
      { x: leftToYAxis + (x - plot.axis.x.from) * (plot.stepWidth.x / plot.stepValue.x), y: -(bottomToXAxis + (fn(x) - plot.axis.y.from) * (plot.stepWidth.y / plot.stepValue.y)) },
      {
        duration: speed,
        x: leftToYAxis + (x + stepSize - plot.axis.x.from) * (plot.stepWidth.x / plot.stepValue.x),
        y: -(bottomToXAxis + (fn(x + stepSize) - plot.axis.y.from) * (plot.stepWidth.y / plot.stepValue.y)),
      }
    );
  }
  animationTimeline.pause();
  element.style.visibility = 'hidden';
  return animationTimeline;
};

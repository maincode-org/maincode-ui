import gsap from 'gsap';
import { createCannonAnimation, createFollowFnAnimation } from './make-animations';

export const playAnimation = (element: HTMLElement | undefined, timelines: (gsap.core.Timeline | undefined)[]): void => {
  if (!timelines?.[0] || !element) return;
  const masterTimeline = gsap.timeline();
  timelines.forEach((t) => t && masterTimeline.add(t.restart(), '<'));
};

export const AnimationToolkit = {
  playAnimation: playAnimation,
  functions: {
    makeFnAnimation: createFollowFnAnimation,
  },
  cannon: {
    makeCannonAnimation: createCannonAnimation,
  },
};

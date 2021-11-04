import { createCannonAnimation, createFollowFnAnimation } from './make-animations';

import gsap from 'gsap';

export const playAnimation = (element: HTMLElement | undefined, timeline1: gsap.core.Timeline | undefined, timeline2: gsap.core.Timeline | undefined): void => {
  if (!timeline1 || !timeline2 || !element) return;
  const masterTimeline = gsap.timeline();
  masterTimeline.add(timeline1.restart()).add(timeline2.restart(), '<');
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

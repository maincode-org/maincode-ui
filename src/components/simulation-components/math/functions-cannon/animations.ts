import gsap from 'gsap';

export const createCannonAnimation = (cannonBody: string): gsap.core.Timeline => {
  const animationTimeline = gsap.timeline();
  animationTimeline.to(cannonBody, { duration: 0.1, transform: 'rotateZ(-10deg)' });
  animationTimeline.to(cannonBody, { duration: 0.2, transform: 'rotateZ(0deg)' });

  animationTimeline.pause();
  return animationTimeline;
};

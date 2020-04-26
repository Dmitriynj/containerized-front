import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { TimelineMax as Timeline, Power1 } from 'gsap';

const enterBackgroundImageTimeline = (node: HTMLElement, delay: number) => {
  gsap.registerPlugin(MotionPathPlugin);
  const timeline = gsap.timeline();

  const a = document.getElementById('a');

  const lineOne = document.getElementById('line-one');

  console.log(a);
  console.log(lineOne);

  // timeline
  //   .set('#a', { xPercent: -50, yPercent: -50, transformOrigin: '50% 50%' })
  //   .to('#a', { duration: 5, motionPath: '#lineOne' });

  return timeline;
};

const exitBackgroundImageTimeline = (node: HTMLElement) => {
  const timeline = new Timeline({ paused: true });
  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  return timeline;
};

export { enterBackgroundImageTimeline, exitBackgroundImageTimeline };

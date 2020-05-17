import { TimelineMax as Timeline, Power1 } from 'gsap';

const DELAY = 0.5;

const enterSubTimeline = (node: HTMLElement) => {
  const timeline = new Timeline({ paused: true });
  const content = node.querySelector('.site-layout-content > div');

  timeline
    .from(node, 0.5, {
      display: 'block',
      autoAlpha: 0,
      DELAY,
      ease: Power1.easeIn,
    })
    .set(node, { display: 'block' })
    .from(content, 0.3, {
      autoAlpha: 0,
      y: 25,
      ease: Power1.easeInOut,
    });

  return timeline;
};

export { enterSubTimeline };

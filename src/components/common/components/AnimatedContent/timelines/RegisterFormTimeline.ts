import { TimelineMax as Timeline, Power1 } from 'gsap';

const enterRegisterFormTimeline = (node: HTMLElement, delay: number) => {
  const timeline = new Timeline({ paused: true });
  const content = node.querySelector('.site-layout-content > div');

  timeline
    .from(node, 0.5, {
      display: 'block',
      autoAlpha: 0,
      delay,
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

const exitRegisterFormTimeline = (node: HTMLElement) => {
  const timeline = new Timeline({ paused: true });
  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  return timeline;
};

export { enterRegisterFormTimeline, exitRegisterFormTimeline };

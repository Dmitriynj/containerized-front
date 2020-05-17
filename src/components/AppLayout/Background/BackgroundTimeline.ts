import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Expo } from 'gsap';

const DEFAULT_OPTIONS = {
  xPercent: -50,
  yPercent: -50,
  transformOrigin: '50% 50%',
};

const backgroundTimeline = (node: HTMLElement) => {
  gsap.registerPlugin(MotionPathPlugin);
  const timeline = gsap.timeline();

  const elem = node.querySelector('#e');
  const elem1 = node.querySelector('#e1');
  const elem2 = node.querySelector('#e2');
  const elem3 = node.querySelector('#e3');
  const elem4 = node.querySelector('#e4');
  const elem5 = node.querySelector('#e5');
  const elem6 = node.querySelector('#e6');

  timeline
    .set(elem, DEFAULT_OPTIONS)
    .set(elem1, DEFAULT_OPTIONS)
    .set(elem2, DEFAULT_OPTIONS)
    .set(elem3, DEFAULT_OPTIONS)
    .set(elem4, DEFAULT_OPTIONS)
    .set(elem5, DEFAULT_OPTIONS)
    .set(elem6, DEFAULT_OPTIONS)
    .to(
      elem1,
      {
        motionPath: {
          path: '#b',
          end: 0.9,
        },
        ease: Expo.easeOut,
      },
      1.4
    )
    .to(
      elem,
      {
        motionPath: {
          path: '#a',
          end: 0.32,
        },
        ease: Expo.easeOut,
      },
      1.5
    )
    .from(
      elem5,

      {
        motionPath: { path: '#c', end: 0.72, start: 0.5 },
        ease: Expo.easeOut,
      },
      1.6
    )
    .to(
      elem4,

      {
        motionPath: {
          path: '#b',
          end: 0.96,
        },
        ease: Expo.easeOut,
      },
      1.7
    )
    .from(
      elem3,

      {
        motionPath: { path: '#a', start: 0.63 },
        ease: Expo.easeOut,
      },
      1.8
    )
    .to(
      elem2,
      {
        motionPath: {
          path: '#c',
          end: 0.27,
        },
        ease: Expo.easeOut,
      },
      1.9
    )
    .to(
      elem6,
      {
        motionPath: { path: '#b', end: 0.4 },
        ease: Expo.easeOut,
      },
      2
    );

  return timeline;
};

export {
  backgroundTimeline,
};

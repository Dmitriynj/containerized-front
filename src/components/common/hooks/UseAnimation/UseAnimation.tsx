import { useEffect, useRef } from 'react';
import { TimelineMax as Timeline } from 'gsap';

const useAnimation = (type: string) => {
  const animationRef = useRef(null);

  useEffect(() => {
    const timelineLazyModule = import(`./timelines/${type}`);
    let timeline: Timeline;
    
    timelineLazyModule.then((module: any) => {
      timeline = module[`enter${type}`](animationRef.current);
      requestAnimationFrame(() => timeline.play());
    });

    return () => {
      timelineLazyModule.then((module: any) => {
        const exitTimeline = module[`exit${type}`](timeline);
        requestAnimationFrame(() => exitTimeline.play());
      });
    };
  }, []);

  return animationRef;
};

export {useAnimation};
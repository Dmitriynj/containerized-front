import React, { ReactNode } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';

type AnimatedConentType = {
  children: ReactNode;
  type: string;
  timeout: {
    enter: number;
    exit: number;
  };
};

const ON_ENTER_DELAY = 0;
const ON_EXIT_DELAY = 0;

const AnimatedConent = ({ children, type, timeout }: AnimatedConentType) => {
  const play = (node: HTMLElement, appears: boolean) =>
    import(`./timelines/${type}`).then((module: any) => {
      const delay = appears ? ON_ENTER_DELAY : ON_EXIT_DELAY;
      let timeline: any = module[`enter${type}`](node, delay);
      requestAnimationFrame(() => timeline.play());
    });

  const exit = (node: HTMLElement) =>
    import(`./timelines/${type}`).then((module: any) => {
      let timeline: any = module[`exit${type}`](node);
      timeline.play();
    });

  return (
    <TransitionGroup>
      <Transition appear={true} onEnter={play} onExit={exit} timeout={timeout}>
        {children}
      </Transition>
    </TransitionGroup>
  );
};

export { AnimatedConent };

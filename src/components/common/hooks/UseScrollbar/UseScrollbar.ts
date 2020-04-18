import { useEffect, useRef } from 'react';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import Scrollbar from 'smooth-scrollbar';

const useScrollbar = (initialRef: HTMLDivElement | null) => {
  const scrollableRef = useRef<HTMLDivElement | null>(initialRef);

  useEffect(() => {
    if (scrollableRef.current) {
      Scrollbar.use(OverscrollPlugin);
      Scrollbar.init(scrollableRef.current, {
        plugins: {
          overscroll: true,
        },
        damping: 0.1,
        thumbMinSize: 20,
        renderByPixels: true,
        alwaysShowTracks: false,
        continuousScrolling: true,
      });
    }

    return () => {
      if (scrollableRef.current) {
        Scrollbar.destroy(scrollableRef.current);
      }
    };
  }, []);

  return scrollableRef;
};

export { useScrollbar };

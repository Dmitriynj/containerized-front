import React, { useRef, useEffect } from 'react';
import './Background.css';
import BackgroundImage from '../../../assets/icons/background.svg';
import { useAppContext } from '../../common/hooks/UseAppContext/UseAppContext';
import {
  backgroundTimeline,
} from './BackgroundTimeline';

const Background = () => {
  const { success, setSuccess } = useAppContext();
  const background = useRef<HTMLElement | any>();

  useEffect(() => {
    requestAnimationFrame(() => backgroundTimeline(background.current).play());
    
    const svgBackground = background.current.querySelector('#background');
    const updateViewBox = () => {
      const deviceWidth = window.innerWidth;
      if(deviceWidth < 720) {
        svgBackground.setAttribute('viewBox', '500 225 500 720');
      } else if (deviceWidth < 1080) {
        svgBackground.setAttribute('viewBox', '300 180 980 720');
      } else {
        svgBackground.setAttribute('viewBox', '300 180 1280 720');
      }
    }
    updateViewBox();
  }, [])

  useEffect(() => {
    if (success) {
      requestAnimationFrame(() => backgroundTimeline(background.current).reverse(3))
    }
  }, [success, setSuccess]);

  return (
    <div ref={background}>
      <BackgroundImage id='background' />
    </div>
  );
};

export { Background };

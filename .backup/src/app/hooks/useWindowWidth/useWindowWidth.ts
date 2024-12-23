import { useEffect, useState } from 'react';

function getCurrentWidth() {
  return window.innerWidth;
}

function getMediaQuerySize(variableName: string) {
  const style = getComputedStyle(document.body);

  return Number(style?.getPropertyValue(variableName)?.trim().replace('px', ''));
}

function getMediaQuerySizes() {
  return {
    tabletSmallSize: getMediaQuerySize('--screen-size-tablet-small'),
    tabletLargeSize: getMediaQuerySize('--screen-size-tablet-large'),
    desktopSmallSize: getMediaQuerySize('--screen-size-desktop-small'),
    desktopLargeSize: getMediaQuerySize('--screen-size-desktop-large'),
  };
}

function useWindowWidth() {
  const [width, setWidth] = useState(getCurrentWidth());
  const [mediaQuerySizes, setMediaQuerySizes] = useState(getMediaQuerySizes());

  useEffect(() => {
    function changeWidthValue() {
      const currentWidth = getCurrentWidth();

      if (width !== currentWidth) {
        setWidth(getCurrentWidth());
        setMediaQuerySizes(getMediaQuerySizes());
      }
    }

    window.addEventListener('resize', changeWidthValue);

    return () => {
      window.removeEventListener('resize', changeWidthValue);
    };
  }, [width]);

  return { windowWidth: width, ...mediaQuerySizes };
}

export default useWindowWidth;

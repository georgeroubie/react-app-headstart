import { useEffect } from 'react';

function getHeight() {
  return `${window.innerHeight}px`;
}

function useBodyHeight() {
  useEffect(() => {
    function changeHeightValue() {
      document.documentElement.style.setProperty('--app-height', getHeight());
    }

    changeHeightValue();

    window.addEventListener('resize', changeHeightValue);
    return () => {
      window.removeEventListener('resize', changeHeightValue);
    };
  }, []);
}

export default useBodyHeight;

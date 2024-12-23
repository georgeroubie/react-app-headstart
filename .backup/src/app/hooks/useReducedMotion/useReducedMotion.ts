import { useEffect, useState } from 'react';

const MEDIA_QUERY = '(prefers-reduced-motion:no-preference)';

function isReducedMotionEnabled() {
  return window?.matchMedia?.(MEDIA_QUERY)?.matches ? false : true;
}

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(isReducedMotionEnabled());

  useEffect(() => {
    function updateReducedMotion() {
      setReducedMotion(isReducedMotionEnabled());
    }

    window.matchMedia?.(MEDIA_QUERY)?.addEventListener('change', updateReducedMotion);

    return () => {
      window.matchMedia?.(MEDIA_QUERY)?.removeEventListener('change', updateReducedMotion);
    };
  }, []);

  return reducedMotion;
}

export default useReducedMotion;

import { useEffect, useRef } from 'react';

function useAbortController() {
  const abortControllerRef = useRef<AbortController>(new AbortController());

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      abortControllerRef.current.abort();
    };
  }, []);

  return {
    abortControllerRef,
  };
}

export default useAbortController;

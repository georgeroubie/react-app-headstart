import { useEffect, useState } from 'react';

const MEDIA_QUERY = '(prefers-color-scheme:dark)';

type ColorTheme = 'light' | 'dark';

function getCurrentColorTheme(): ColorTheme {
  return window?.matchMedia?.(MEDIA_QUERY)?.matches ? 'dark' : 'light';
}

function useColorTheme(): ColorTheme {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(getCurrentColorTheme());

  useEffect(() => {
    function updateColorScheme() {
      setColorTheme(getCurrentColorTheme());
    }

    window.matchMedia?.(MEDIA_QUERY)?.addEventListener('change', updateColorScheme);

    return () => {
      window.matchMedia?.(MEDIA_QUERY)?.removeEventListener('change', updateColorScheme);
    };
  }, []);

  return colorTheme;
}

export default useColorTheme;

type LoadStyleParams = {
  id: string;
  url: string;
  rel?: string;
  type?: string;
  onLoad?: () => void;
};

function useLoadStyle() {
  function loadStyle({ id, url, rel = 'stylesheet', type = 'text/css', onLoad }: LoadStyleParams) {
    if (document.getElementById(id)) {
      onLoad?.();
      return;
    }

    const style = document.createElement('link');
    if (onLoad) {
      style.onload = onLoad;
    }

    style.id = id;
    style.href = url;
    style.type = type;
    style.rel = rel;
    style.onerror = () => {
      style.remove();
    };

    document.head.appendChild(style);
  }

  return {
    loadStyle,
  };
}

export default useLoadStyle;

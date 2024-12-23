type LoadScriptParams = {
  id: string;
  url: string;
  type?: string;
  async?: boolean;
  defer?: boolean;
  onLoad?: () => void;
};

function useLoadScript() {
  function loadScript({ id, url, async = true, defer = true, type = 'text/javascript', onLoad }: LoadScriptParams) {
    if (document.getElementById(id)) {
      onLoad?.();
      return;
    }

    const script = document.createElement('script');
    if (onLoad) {
      script.onload = onLoad;
    }

    script.id = id;
    script.type = type;
    script.src = url;
    script.async = async;
    script.defer = defer;
    script.onerror = () => {
      script.remove();
    };

    document.head.appendChild(script);
  }

  return {
    loadScript,
  };
}

export default useLoadScript;

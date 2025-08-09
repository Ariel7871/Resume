import { useEffect, useRef } from "react";

const CHATBASE_SCRIPT_SRC = "https://www.chatbase.co/embed.min.js";

function ChatbaseWidget() {
  const loadedRef = useRef(false);
  const widgetId = import.meta.env.VITE_CHATBASE_ID || 'xZyP8yLrno1ybPcNlvlej';

  useEffect(() => {
    if (!widgetId) {
      // No ID configured; skip loading
      return;
    }

    if (loadedRef.current || window.__chatbase_loaded) return;

    // Prevent duplicate injection (StrictMode mounts effects twice in dev)
    const existingScript = document.getElementById(widgetId);
    if (existingScript) {
      loadedRef.current = true;
      window.__chatbase_loaded = true;
      return;
    }

    // Stub
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) window.chatbase.q = [];
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") return target.q;
          return (...args) => target(prop, ...args);
        },
      });
    }

    const script = document.createElement("script");
    script.src = CHATBASE_SCRIPT_SRC;
    script.defer = true;
    script.id = widgetId;
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    loadedRef.current = true;
    window.__chatbase_loaded = true;

    return () => {
      // Do not remove script on unmount to keep widget persistent across routes
    };
  }, [widgetId]);

  return null;
}

export default ChatbaseWidget;

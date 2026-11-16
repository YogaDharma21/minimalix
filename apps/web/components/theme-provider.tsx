"use client";

import * as React from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "minimalix-theme";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: Theme;
  setTheme: (theme: Theme | ((prev: Theme) => Theme)) => void;
}

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: "dark",
  resolvedTheme: "dark",
  setTheme: () => {},
});

export function useTheme() {
  return React.useContext(ThemeContext);
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

function getStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // storage unavailable, fall through to default
  }
  return "dark";
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("dark");
  const themeRef = React.useRef<Theme>(theme);

  const setTheme = React.useCallback(
    (next: Theme | ((prev: Theme) => Theme)) => {
      const value =
        typeof next === "function"
          ? (next as (prev: Theme) => Theme)(themeRef.current)
          : next;
      themeRef.current = value;
      applyTheme(value);
      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch {
        // storage unavailable, theme still applies for the session
      }
      setThemeState(value);
    },
    []
  );

  React.useEffect(() => {
    const stored = getStoredTheme();
    themeRef.current = stored;
    applyTheme(stored);
    setThemeState(stored);
  }, []);

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) {
        return;
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      if (event.key.toLowerCase() !== "d") {
        return;
      }

      if (isTypingTarget(event.target)) {
        return;
      }

      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [setTheme]);

  const value = React.useMemo(
    () => ({ theme, resolvedTheme: theme, setTheme }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

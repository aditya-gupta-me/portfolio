"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  // Prevent hydration mismatch by not rendering theme-dependent UI until mounted
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ darkMode: false, toggleDarkMode }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

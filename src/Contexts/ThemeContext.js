import { createContext, useLayoutEffect } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

const themeOptions = {
  dark: {
    backgroundColor: "black",
    color: "maroon",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? themeOptions.dark : themeOptions.light;
  const toggleTheme = () => {
    localStorage.setItem("isDark", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  useLayoutEffect(() => {
    const isDark = JSON.parse(localStorage.getItem("isDark")) === true;
    setIsDarkMode(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[{ theme, isDarkMode }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

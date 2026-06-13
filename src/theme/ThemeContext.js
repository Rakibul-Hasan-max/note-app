import React, { createContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState(systemScheme || "light");

  useEffect(() => {
    if (systemScheme) {
      setTheme(systemScheme);
    }
  }, [systemScheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const isDark = theme === "dark";

  const themeColors = {
    background: isDark ? "#1b252d" : "#ffffff",
    text: isDark ? "#f8fafc" : "#070724",
    border: isDark ? "#475569" : "#cfcfcf",
    inputBorder: isDark ? "#475569" : "#838391",
    headerText: isDark ? "#ffffff" : "#070724",
    iconColor: isDark ? "#ffffff" : "#000000",
    placeholder: isDark ? "#94a3b8" : "#838391",
    cardBorder: isDark ? "#334155" : "#e2e8f0",
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, colors: themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

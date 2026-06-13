import React, { createContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState("light");

  // Load saved theme on mount
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("user_theme");
        if (savedTheme !== null) {
          setTheme(savedTheme);
        } else if (systemScheme) {
          setTheme(systemScheme);
        }
      } catch (error) {
        console.log("Error loading theme", error);
      }
    };
    loadTheme();
  }, [systemScheme]);

  const toggleTheme = async () => {
    try {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      await AsyncStorage.setItem("user_theme", newTheme);
    } catch (error) {
      console.log("Error saving theme", error);
    }
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

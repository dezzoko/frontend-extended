import { useContext } from "react";
import { THEME, Theme, ThemeContext } from "./themeContext";

interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(THEME, newTheme);
  };
  return { theme, toggleTheme };
};
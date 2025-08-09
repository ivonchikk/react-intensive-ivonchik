import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used with a ThemeProvider");
  }
  return context
};

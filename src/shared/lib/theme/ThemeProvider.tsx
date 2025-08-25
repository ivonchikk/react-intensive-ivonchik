import { createContext, useState, type ReactNode } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  switchThemes: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const switchThemes = () => setTheme((theme) => (theme === "light" ? "dark" : "light"));

  return (
    <ThemeContext value={{ theme, switchThemes }}>
      <div className={theme}>{children}</div>
    </ThemeContext>
  );
}

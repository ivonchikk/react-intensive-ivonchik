import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { ToggleButton } from "../../../shared/ui/Button/ThemeToggleButton/ToggleButton";

export function ThemeSwitcher() {
  const { theme, switchThemes } = useTheme();

  return (
    <ToggleButton onClick={switchThemes}>{theme === "dark" ? <FaMoon /> : <FaSun />}</ToggleButton>
  );
}

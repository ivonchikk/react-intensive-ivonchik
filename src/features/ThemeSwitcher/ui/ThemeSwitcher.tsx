import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Button } from "../../../shared/ui/Button/StandardButton/Button";
import classes from "./themeSwitcher.module.css"

export function ThemeSwitcher() {
  const { theme, switchThemes } = useTheme();

  return (
    <Button className={classes.button} onClick={switchThemes}>{theme === "dark" ? <FaMoon /> : <FaSun />}</Button>
  );
}

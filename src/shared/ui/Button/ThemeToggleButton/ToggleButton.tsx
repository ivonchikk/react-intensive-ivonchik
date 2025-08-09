import type { MouseEventHandler, ReactNode } from "react";
import classes from "./toggleButton.module.css";

interface toggleButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler;
}

export function ToggleButton({ children, onClick }: toggleButtonProps) {
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
}

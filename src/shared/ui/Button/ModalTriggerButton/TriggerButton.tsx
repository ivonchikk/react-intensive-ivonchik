import type { MouseEventHandler, ReactNode } from "react";
import classes from "./modalTriggerButton.module.css";

interface TriggerButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler;
}

export const TriggerButton = ({ children, onClick }: TriggerButtonProps) => {
  return <button className={classes.button} onClick={onClick}>{children}</button>;
};

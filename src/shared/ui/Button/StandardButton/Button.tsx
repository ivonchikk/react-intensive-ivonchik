
import { memo, type MouseEventHandler, type ReactNode } from "react";

interface ButtonProps {

  children: ReactNode;
  onClick: MouseEventHandler;
  className: string;
}

export const Button = memo(({ children, onClick, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
});


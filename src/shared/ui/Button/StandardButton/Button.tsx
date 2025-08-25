import type { MouseEventHandler, ReactNode } from "react";

interface toggleButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler;
  className: string;
}

export function Button({ children, onClick, className }: toggleButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

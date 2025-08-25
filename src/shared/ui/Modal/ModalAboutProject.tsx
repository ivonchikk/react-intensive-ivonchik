import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import './modalAboutProject.css'

interface ModalAboutProjectProps {
  children: ReactNode;
  open: boolean;
}

export function ModalAboutProject({ children, open }: ModalAboutProjectProps) {
  return createPortal(<dialog open={open}>{children}</dialog>, document.getElementById("modal")!);
}

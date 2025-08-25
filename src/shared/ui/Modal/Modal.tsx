import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import classes from './modal.module.css';

interface ModalProps {
  children: ReactNode;
  active: boolean;
  setActive: () => void;
}

export function Modal({ children, active, setActive }: ModalProps) {
  return createPortal(
    <div className={`${classes.modal} ${active ? classes.active : ''}`} onClick={setActive}>
      <div className = {classes.modal_content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,

    document.getElementById("modal")!
  );
}

Modal.Header = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};
Modal.Body = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};
Modal.Footer = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

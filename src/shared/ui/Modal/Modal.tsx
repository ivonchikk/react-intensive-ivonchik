import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

interface ModalProps {
  children: ReactNode;
  active: boolean;
  setActive: () => void;
}

export function Modal({ children, active, setActive }: ModalProps) {
  return createPortal(
    <div className={active ? "modal active" : "modal"} onClick={setActive}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
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

import type { ReactElement } from "react";
import { ThemeProvider } from "../lib/theme/ThemeProvider";
import classes from "./mainLayout.module.css";

interface MainLayoutProps {
  children: ReactElement;
  header: ReactElement;
  footer: ReactElement;
}

export function MainLayout({ children, header, footer }: MainLayoutProps) {
  return (
    <ThemeProvider>
      <div className={classes.app}>
        {header}
        <main>{children}</main>
        {footer}
      </div>
    </ThemeProvider>
  );
}

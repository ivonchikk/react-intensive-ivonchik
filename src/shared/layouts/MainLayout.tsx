import type { ReactElement } from "react";
import { ThemeProvider } from "../lib/theme/ThemeProvider";
import classes from "./mainLayout.module.css";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {
  header: ReactElement;
  footer: ReactElement;
}

export function MainLayout({ header, footer }: MainLayoutProps) {
  return (
    <ThemeProvider>
      <div className={classes.app}>
        {header}
        <main className={classes.main}>
          <Outlet />
        </main>
        {footer}
      </div>
    </ThemeProvider>
  );
}

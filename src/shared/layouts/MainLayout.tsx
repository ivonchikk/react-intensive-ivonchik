import type { ReactElement } from "react";
import { ThemeProvider } from "../lib/theme/ThemeProvider";

interface MainLayoutProps {
  children: ReactElement;
  header: ReactElement;
  footer: ReactElement;
}

export function MainLayout({ children, header, footer }: MainLayoutProps) {
  return (
    <ThemeProvider>
    <div className="app">
      {header}
      <main>{children}</main>
      {footer}
    </div>
    </ThemeProvider>
  );
}

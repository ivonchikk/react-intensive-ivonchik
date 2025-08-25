import type { ReactElement } from "react";

interface MainLayoutProps {
  children: ReactElement;
  header: ReactElement;
  footer: ReactElement;
}

export function MainLayout({ children, header, footer }: MainLayoutProps) {
  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}

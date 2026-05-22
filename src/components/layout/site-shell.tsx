import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <main className="mx-auto w-full max-w-screen-2xl bg-background">
      {children}
    </main>
  );
}
import type { ReactNode } from "react";

export function HeroBio({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-lg text-base leading-[1.65] tracking-tight text-muted">
      {children}
    </p>
  );
}

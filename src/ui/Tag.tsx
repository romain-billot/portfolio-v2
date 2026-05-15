import type {ReactNode} from "react";

export function Tag({children}: { children: ReactNode }) {
	return (
		<span className="whitespace-nowrap rounded-xl border border-border px-3 py-2 text-xs tracking-wide text-muted">
      {children}
    </span>
	);
}

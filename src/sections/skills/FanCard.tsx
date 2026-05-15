import {forwardRef} from "react";

type Props = { num: string; label: string; role: string };

export const FanCard = forwardRef<HTMLDivElement, Props>(function FanCard(
	{num, label, role},
	ref,
) {
	return (
		<div ref={ref} className="fan-card" data-cursor="hover">
			<span className="absolute top-5 right-5 h-1.5 w-1.5 rounded-full bg-accent"/>
			<span className="text-xs tracking-[0.2em] text-muted">{num}</span>
			<span className="text-2xl font-semibold leading-tight tracking-tight">{label}</span>
			<span className="text-xs uppercase tracking-[0.16em] text-muted">{role}</span>
		</div>
	);
});

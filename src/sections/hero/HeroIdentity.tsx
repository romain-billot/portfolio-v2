import {useEffect, useState} from "react";

type Props = { name: string; label: string; location: string };

const LINE_BASE = "inline-block transition-transform duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)]";

export function HeroIdentity({name, label, location}: Props) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		const t = requestAnimationFrame(() => setMounted(true));
		return () => cancelAnimationFrame(t);
	}, []);

	const [first, ...rest] = name.split(" ");
	const last = rest.join(" ");

	return (
		<div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
			<h1 className="ml-[-0.05em] text-[clamp(32px,4vw,64px)] font-bold leading-[0.92] tracking-tight max-sm:ml-0 max-sm:flex max-sm:items-end max-sm:justify-center max-sm:gap-[0.25em] max-sm:text-[clamp(36px,10vw,64px)]">
        <span className="block overflow-hidden pb-[0.04em]">
          <span className={`${LINE_BASE} ${mounted ? "translate-y-0" : "translate-y-[105%]"}`}>
            {first}
          </span>
        </span>
				<span className="block overflow-hidden pb-[0.04em]">
          <span
			  className={`${LINE_BASE} text-dim delay-120 ${
				  mounted ? "translate-y-0" : "translate-y-[105%]"
			  }`}
		  >
            {last}
          </span>
        </span>
			</h1>
			<div className="mt-9 text-xs uppercase tracking-[0.16em] text-muted">
				<span>
					{label}
					<span className="max-sm:hidden"> · </span>
					<span className="sm:hidden"><br/></span>
					{location}
				</span>
			</div>
		</div>
	);
}
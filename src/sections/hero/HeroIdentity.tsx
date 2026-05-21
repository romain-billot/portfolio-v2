import {useEffect, useState} from "react";

type Props = { name: string; tagline: string };

const LINE_BASE = "inline-block transition-transform duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)]";

export function HeroIdentity({name, tagline}: Props) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		const t = requestAnimationFrame(() => setMounted(true));
		return () => cancelAnimationFrame(t);
	}, []);

	const [first, ...rest] = name.split(" ");
	const last = rest.join(" ");

	return (
		<div>
			<div className="mb-9 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted">
				<span
					className="block h-1.5 w-1.5 animate-[pulse_2.4s_ease-in-out_infinite] rounded-full bg-accent shadow-[0_0_14px_var(--color-accent)]"/>
				{tagline}
			</div>
			<h1 className="text-[clamp(48px,7.3vw,107px)] font-bold leading-[0.92] tracking-tight max-sm:text-[clamp(40px,12vw,73px)]">
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
		</div>
	);
}

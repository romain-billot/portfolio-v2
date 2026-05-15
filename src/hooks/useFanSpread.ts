import {useCallback, useEffect, useRef, type RefObject} from "react";

type Options = {
	count: number;
	rotPerStep?: number;
	xPerStep?: number;
	yPerStep?: number;
	staggerMs?: number;
	threshold?: number;
	mobileBreakpoint?: number;
};

export function useFanSpread(opts: Options): {
	containerRef: RefObject<HTMLDivElement | null>;
	registerCard: (i: number) => (el: HTMLElement | null) => void;
} {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const cardsRef = useRef<(HTMLElement | null)[]>([]);

	const {
		count,
		rotPerStep = 9,
		xPerStep = 78,
		yPerStep = 12,
		staggerMs = 70,
		threshold = 0.3,
		mobileBreakpoint = 880,
	} = opts;

	const registerCard = useCallback(
		(i: number) => (el: HTMLElement | null) => {
			cardsRef.current[i] = el;
		},
		[],
	);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const isMobile = () => window.innerWidth < mobileBreakpoint;
		const half = (count - 1) / 2;

		const spread = () => {
			if (isMobile()) return;
			cardsRef.current.forEach((card, i) => {
				if (!card) return;
				const offset = i - half;
				const rot = offset * rotPerStep;
				const x = offset * xPerStep;
				const y = Math.abs(offset) * yPerStep;
				setTimeout(() => {
					card.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rot}deg)`;
				}, i * staggerMs);
			});
		};

		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((en) => {
					if (en.isIntersecting) {
						container.classList.add("in-view");
						spread();
						obs.unobserve(en.target);
					}
				});
			},
			{threshold},
		);
		obs.observe(container);

		return () => obs.disconnect();
	}, [count, rotPerStep, xPerStep, yPerStep, staggerMs, threshold, mobileBreakpoint]);

	return {containerRef, registerCard};
}

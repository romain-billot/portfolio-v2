import {useEffect, useRef, type RefObject} from "react";

const REVEAL_MAX_STAGGER = 6;
const REVEAL_STAGGER_MS = 60;

export function useReveal<T extends HTMLElement>(
	opts: { threshold?: number; delayIndex?: number } = {},
): RefObject<T | null> {
	const ref = useRef<T | null>(null);
	const {threshold = 0.12, delayIndex = 0} = opts;

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		el.classList.add("reveal");
		if (delayIndex > 0) {
			el.style.transitionDelay = `${(delayIndex % REVEAL_MAX_STAGGER) * REVEAL_STAGGER_MS}ms`;
		}

		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((en) => {
					if (en.isIntersecting) {
						en.target.classList.add("in");
						obs.unobserve(en.target);
					}
				});
			},
			{threshold},
		);
		obs.observe(el);

		return () => obs.disconnect();
	}, [threshold, delayIndex]);

	return ref;
}

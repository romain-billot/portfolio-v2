import {useEffect, useRef, type RefObject} from "react";

export function useParallax<T extends HTMLElement>(factor: number): RefObject<T | null> {
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		let ticking = false;
		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				const y = window.scrollY;
				if (y < window.innerHeight * 1.6) {
					el.style.transform = `translateY(${y * factor}px)`;
				}
				ticking = false;
			});
		};
		window.addEventListener("scroll", onScroll, {passive: true});
		return () => window.removeEventListener("scroll", onScroll);
	}, [factor]);

	return ref;
}

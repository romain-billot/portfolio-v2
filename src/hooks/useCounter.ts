import {useEffect, useRef, type RefObject} from "react";

export function useCounter(
	target: number,
	opts: { duration?: number; threshold?: number } = {},
): RefObject<HTMLSpanElement | null> {
	const ref = useRef<HTMLSpanElement | null>(null);
	const {duration = 1400, threshold = 0.6} = opts;

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		el.textContent = "0";

		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((en) => {
					if (!en.isIntersecting) return;
					const start = performance.now();
					const step = (now: number) => {
						const t = Math.min(1, (now - start) / duration);
						const eased = 1 - Math.pow(1 - t, 3);
						el.textContent = Math.round(target * eased).toString();
						if (t < 1) requestAnimationFrame(step);
					};
					requestAnimationFrame(step);
					obs.unobserve(en.target);
				});
			},
			{threshold},
		);
		obs.observe(el);

		return () => obs.disconnect();
	}, [target, duration, threshold]);

	return ref;
}

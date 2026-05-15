import {useEffect, useRef, type RefObject} from "react";

export function useTilt<T extends HTMLElement>(maxDeg = 24): RefObject<T | null> {
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(pointer: coarse)").matches) return;

		const controller = new AbortController();
		const {signal} = controller;

		el.addEventListener(
			"mousemove",
			(e) => {
				const r = el.getBoundingClientRect();
				const px = (e.clientX - r.left) / r.width;
				const py = (e.clientY - r.top) / r.height;
				const ry = (px - 0.5) * maxDeg;
				const rx = (0.5 - py) * maxDeg;
				el.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg)`;
			},
			{signal},
		);
		el.addEventListener(
			"mouseleave",
			() => {
				el.style.transform = "";
			},
			{signal},
		);

		return () => controller.abort();
	}, [maxDeg]);

	return ref;
}

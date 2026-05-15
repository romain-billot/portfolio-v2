import {useEffect, useRef, type RefObject} from "react";

export function useCursor(): {
	dotRef: RefObject<HTMLDivElement | null>;
	ringRef: RefObject<HTMLDivElement | null>;
} {
	const dotRef = useRef<HTMLDivElement | null>(null);
	const ringRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const dot = dotRef.current;
		const ring = ringRef.current;
		if (!dot || !ring) return;

		const isCoarse = window.matchMedia("(pointer: coarse)").matches;
		if (isCoarse) {
			dot.style.display = "none";
			ring.style.display = "none";
			return;
		}

		const controller = new AbortController();
		const {signal} = controller;

		let mx = window.innerWidth / 2;
		let my = window.innerHeight / 2;
		let rx = mx;
		let ry = my;
		let dx = mx;
		let dy = my;
		let rafId = 0;

		window.addEventListener(
			"mousemove",
			(e) => {
				mx = e.clientX;
				my = e.clientY;
			},
			{signal},
		);

		const tick = () => {
			rx += (mx - rx) * 0.18;
			ry += (my - ry) * 0.18;
			dx += (mx - dx) * 0.5;
			dy += (my - dy) * 0.5;
			dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
			ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
			rafId = requestAnimationFrame(tick);
		};
		tick();

		const onOver = (e: MouseEvent) => {
			const target = e.target as HTMLElement | null;
			if (target?.closest('[data-cursor="hover"], a, button')) {
				ring.classList.add("hover");
			}
		};
		const onOut = (e: MouseEvent) => {
			const target = e.target as HTMLElement | null;
			if (target?.closest('[data-cursor="hover"], a, button')) {
				ring.classList.remove("hover");
			}
		};
		document.addEventListener("mouseover", onOver, {signal});
		document.addEventListener("mouseout", onOut, {signal});

		return () => {
			cancelAnimationFrame(rafId);
			controller.abort();
		};
	}, []);

	return {dotRef, ringRef};
}

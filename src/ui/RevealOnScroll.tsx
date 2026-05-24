import type {ReactNode} from "react";
import {useReveal} from "../hooks/useReveal";

type Props = {
	children: ReactNode;
	index?: number;
	className?: string;
	id?: string;
};

export function RevealOnScroll({children, index = 0, className = "", id}: Props) {
	const ref = useReveal<HTMLDivElement>({delayIndex: index});
	return (
		<div ref={ref} className={`${className}${id ? " scroll-mt-28" : ""}`} id={id}>
			{children}
		</div>
	);
}

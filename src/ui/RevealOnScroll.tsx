import type {ReactNode} from "react";
import {useReveal} from "../hooks/useReveal";

type Props = {
	children: ReactNode;
	index?: number;
	className?: string;
};

export function RevealOnScroll({children, index = 0, className = ""}: Props) {
	const ref = useReveal<HTMLDivElement>({delayIndex: index});
	return (
		<div ref={ref} className={className}>
			{children}
		</div>
	);
}

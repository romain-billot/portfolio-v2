import type {ReactNode} from "react";
import {useReveal} from "../hooks/useReveal";

type Props = {
	children: ReactNode;
	index?: number;
	as?: "div" | "article" | "li" | "section";
	className?: string;
};

export function RevealOnScroll({children, index = 0, as = "div", className = ""}: Props) {
	const ref = useReveal<HTMLDivElement>({delayIndex: index});
	const Tag = as;
	return (
		<Tag ref={ref as never} className={className}>
			{children}
		</Tag>
	);
}

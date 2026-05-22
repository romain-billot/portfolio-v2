import type {ReactNode} from "react";
import {useTilt} from "../hooks/useTilt";

type Props = {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
};

export function TiltCard({children, className = "", onClick}: Props) {
	const ref = useTilt<HTMLElement>();
	return (
		<article
			ref={ref as never}
			onClick={onClick}
			
			className={`will-change-transform ${className}`}
		>
			{children}
		</article>
	);
}

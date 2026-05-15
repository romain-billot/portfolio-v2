import type {ReactNode} from "react";
import {SectionLabel} from "./SectionLabel";

type Props = {
	id?: string;
	index?: string;
	title?: string;
	children: ReactNode;
	className?: string;
};

export function Section({id, index, title, children, className = ""}: Props) {
	return (
		<section
			id={id}
			className={`relative mx-auto max-w-7xl px-8 pt-18 pb-10 max-md:px-6 max-md:pt-13 max-md:pb-8 ${className}`}
		>
			{index && title ? <SectionLabel index={index} title={title}/> : null}
			{children}
		</section>
	);
}

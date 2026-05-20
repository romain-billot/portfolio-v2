import type {ReactNode} from "react";

type Props = {
	id?: string;
	index?: string;
	title?: string;
	children: ReactNode;
	className?: string;
};

export function Section({id, title, children, className = ""}: Props) {
	return (
		<section
			id={id}
			className={`relative mx-auto max-w-7xl px-8 pt-18 pb-10 max-md:px-6 max-md:pt-13 max-md:pb-8 ${className}`}
		>
			{title ? (
				<h2 className="mb-12 text-[clamp(28px,3vw,48px)] font-bold leading-none tracking-tight max-md:mb-8">
					{title}
				</h2>
			) : null}
			{children}
		</section>
	);
}

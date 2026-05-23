import type {ReactNode} from "react";

type Props = {
	id?: string;
	title?: string;
	children: ReactNode;
	className?: string;
};

export function Section({id, title, children, className = ""}: Props) {
	return (
		<section
			id={id}
			className={`relative mx-auto max-w-7xl px-8 max-md:px-6 scroll-mt-24 ${className}`}
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

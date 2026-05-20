import type {AnchorHTMLAttributes} from "react";

type Variant = "outline" | "primary";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
	variant?: Variant;
};

const base =
	"inline-flex items-center justify-center w-40 max-md:w-full gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors";

const variants: Record<Variant, string> = {
	outline: "border border-border text-text hover:border-text",
	primary: "bg-text text-bg hover:bg-white",
};

export function Button({variant = "outline", className = "", children, ...props}: Props) {
	return (
		<a {...props} className={`${base} ${variants[variant]} ${className}`}>
			{children}
		</a>
	);
}
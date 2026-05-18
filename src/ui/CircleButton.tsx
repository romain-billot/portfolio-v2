type Props = {
	onClick?: () => void;
	variant: "close" | "toggle";
	active?: boolean;
	label?: string;
};

const icons = {
	close: "×",
	toggle: "+",
};

const labels = {
	close: "fermer",
	toggle: "développer",
};

export function CircleButton({onClick, variant, active, label}: Props) {
	return (
		<button
			onClick={onClick}
			aria-label={label ?? labels[variant]}
			data-cursor="hover"
			className={
				"flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-transparent pb-0.5 text-lg leading-none text-text transition-[transform,border-color,color] duration-400 hover:border-accent hover:text-accent" +
				(active ? " rotate-45 border-accent text-accent" : "")
			}
		>
			{icons[variant]}
		</button>
	);
}

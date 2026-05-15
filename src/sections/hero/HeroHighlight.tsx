type Props = {
	title: string;
	detail: string;
};

export function HeroHighlight({title, detail}: Props) {
	return (
		<div
			data-cursor="hover"
			className="flex h-full flex-col rounded-2xl border border-border bg-bg-2 p-5 transition-colors duration-300 hover:border-accent"
		>
			<div className="text-xl font-semibold leading-tight tracking-normal text-text">
				{title}
			</div>
			<div className="mt-2 whitespace-pre-line text-sm leading-normal text-muted">{detail}</div>
		</div>
	);
}
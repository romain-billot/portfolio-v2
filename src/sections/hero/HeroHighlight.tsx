type Props = {
	title: string;
	detail: string;
	href?: string;
};

export function HeroHighlight({title, detail, href}: Props) {
	const inner = (
		<div className="highlight-flare h-full">
			<div className="highlight-flare-inner flex flex-col p-5">
				<div className="text-xl font-semibold leading-tight tracking-normal text-text">
					{title}
				</div>
				<div className="mt-2 whitespace-pre-line text-sm leading-normal text-muted">{detail}</div>
			</div>
		</div>
	);
	if (href) {
		return <a href={href} className="block h-full">{inner}</a>;
	}
	return inner;
}
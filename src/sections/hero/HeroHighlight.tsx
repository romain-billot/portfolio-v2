type Props = {
	title: string;
	detail: string;
	href?: string;
};

export function HeroHighlight({title, detail, href}: Props) {
	const inner = (
		<div className="highlight-flare h-full">
			<div className="highlight-flare-inner flex flex-col p-5">
				<div className="flex items-start justify-between gap-2">
					<div className="text-xl font-semibold leading-tight tracking-normal text-text">
						{title}
					</div>
					{href && <span className="shrink-0 text-muted min-[900px]:hidden">→</span>}
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
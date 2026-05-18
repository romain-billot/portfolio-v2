type Props = { title: string };

export function SectionLabel({title}: Props) {
	return (
		<div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-[0.18em] max-md:mb-6">
			<span className="text-accent">—</span>
			<span className="text-muted">{title}</span>
		</div>
	);
}

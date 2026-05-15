type Props = { index: string; title: string };

export function SectionLabel({index, title}: Props) {
	return (
		<div
			className="mb-14 flex items-center gap-3.5 text-xs uppercase tracking-[0.18em] text-muted max-md:mb-9 before:block before:h-px before:w-9 before:bg-muted">
			{index} — {title}
		</div>
	);
}

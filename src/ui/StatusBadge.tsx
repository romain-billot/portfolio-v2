type Props = {
	active: boolean;
};

export function StatusBadge({active}: Props) {
	return (
		<span
			className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] whitespace-nowrap ${
				active
					? "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20"
					: "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20"
			}`}
		>
			<span
				className={`size-1.5 rounded-full ${
					active ? "bg-emerald-400 shadow-[0_0_6px_1px_#34d399]" : "bg-amber-400"
				}`}
			/>
			{active ? "En prod" : "En dev"}
		</span>
	);
}
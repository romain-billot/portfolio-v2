import {useState} from "react";
import type {Work} from "../../lib/types";
import {formatDateRange} from "../../lib/format";
import {Tag} from "../../ui/Tag";
import {CircleButton} from "../../ui/CircleButton";
import {RevealOnScroll} from "../../ui/RevealOnScroll";

type Props = { work: Work; index: number };

export function WorkItem({work, index}: Props) {
	const [open, setOpen] = useState(false);
	const dim = work.dim ?? false;

	return (
		<RevealOnScroll
			index={index}
			className={
				"group/xp grid grid-cols-[200px_1fr] items-start gap-8 border-b border-border py-[30px] transition-opacity max-md:grid-cols-1 max-md:gap-2 max-md:py-6" +
				(dim ? " opacity-35 hover:opacity-100" + (open ? " opacity-100" : "") : "")
			}
		>
			<div
				onClick={() => setOpen((o) => !o)}
				data-cursor="hover"
				className="contents text-left"
				aria-expanded={open}
			>
				<div className="pt-1.5 text-xs uppercase tracking-widest text-muted">
					{formatDateRange(work.startDate, work.endDate)}
				</div>
				<div className="relative">
					<div className="flex items-start justify-between gap-4 max-md:gap-3">
						<div>
							<div
								className="text-2xl font-medium tracking-normal transition-colors group-hover/xp:text-accent max-md:text-xl">
								{work.position}
							</div>
							<div className="mt-1 text-sm tracking-tight text-muted">
								{work.name}
								{work.location ? ` · ${work.location}` : ""}
							</div>
						</div>
						<CircleButton variant="toggle" active={open}/>
					</div>
					<div
						className={
							"overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(.4,0,.2,1)]" +
							(open ? " max-h-[600px]" : " max-h-0")
						}
					>
						<div className="max-w-3xl pt-5 text-sm leading-[1.7] text-muted">
							{work.summary && <p>{work.summary}</p>}
							{work.responsibilities && work.responsibilities.length > 0 && (
								<ul className="mt-3 list-disc space-y-1 pl-5">
									{work.responsibilities.map((r, j) => (
										<li key={j}>{r}</li>
									))}
								</ul>
							)}
							{work.skills && work.skills.length > 0 && (
								<div className="mt-4 flex flex-wrap gap-1.5">
									{work.skills.map((s) => (
										<Tag key={s}>{s}</Tag>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</RevealOnScroll>
	);
}

import {useState} from "react";
import type {Education} from "@/lib/types";
import {formatYearRange} from "@/lib/format";
import {CircleButton} from "@/ui/CircleButton";
import {RevealOnScroll} from "@/ui/RevealOnScroll";

type Props = { edu: Education; index: number };

export function EducationItem({edu, index}: Props) {
	const hasBullets = edu.bullets && edu.bullets.length > 0;
	const [open, setOpen] = useState(false);

	return (
		<RevealOnScroll
			index={index}
			id={edu.id}
			className={
				"grid grid-cols-[200px_1fr] items-start gap-8 border-b border-border pt-4 pb-6.5 max-md:grid-cols-1 max-md:gap-1.5 max-md:pt-3 max-md:pb-[22px]" +
				(edu.dim ? " opacity-35 transition-opacity hover:opacity-100" : "") +
				(hasBullets ? " cursor-pointer group/edu" : "")
			}
		>
			<div className="text-xs uppercase tracking-widest text-muted pt-1.5">
				{formatYearRange(edu.startDate, edu.endDate)}
			</div>
			<div
				role={hasBullets ? "button" : undefined}
				tabIndex={hasBullets ? 0 : undefined}
				onClick={hasBullets ? () => setOpen((o) => !o) : undefined}
				onKeyDown={hasBullets ? (e) => (e.key === "Enter" || e.key === " ") && setOpen((o) => !o) : undefined}
				aria-expanded={hasBullets ? open : undefined}
			>
				<div className="flex items-start justify-between gap-4 max-md:gap-3">
					<div>
						<div className="text-xl font-medium tracking-normal transition-colors group-hover/edu:text-accent">
							{edu.studyType} {edu.area}
						</div>
						<div className="mt-1 text-sm text-muted">{edu.institution}</div>
					</div>
					<div className="flex items-center gap-3 shrink-0">
						{edu.honors && (
							<div className="highlight-flare w-fit max-md:hidden">
								<div className="highlight-flare-inner px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-accent">
									★ {edu.honors}
								</div>
							</div>
						)}
						{hasBullets && <CircleButton variant="toggle" active={open}/>}
					</div>
				</div>
				{edu.honors && (
					<div className="highlight-flare w-fit mt-2 md:hidden">
						<div className="highlight-flare-inner px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-accent">
							★ {edu.honors}
						</div>
					</div>
				)}
				{hasBullets && (
					<div
						className={
							"overflow-hidden transition-[max-height] duration-500 ease-in-out" +
							(open ? " max-h-60" : " max-h-0")
						}
					>
						<ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-[1.7] text-muted">
							{edu.bullets!.map((b) => (
								<li key={b}>{b}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</RevealOnScroll>
	);
}
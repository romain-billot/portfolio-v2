import type {Education} from "@/lib/types";
import {formatYearRange} from "@/lib/format";
import {RevealOnScroll} from "@/ui/RevealOnScroll";

type Props = { edu: Education; index: number };

export function EducationItem({edu, index}: Props) {
	return (
		<RevealOnScroll
			index={index}
			className={
				"grid grid-cols-[200px_1fr_auto] items-center gap-8 border-b border-border pt-4 pb-6.5 max-md:grid-cols-1 max-md:gap-1.5 max-md:pt-3 max-md:pb-[22px]" +
				(edu.dim ? " opacity-35 transition-opacity hover:opacity-100" : "")
			}
		>
			<div className="text-xs uppercase tracking-widest text-muted">
				{formatYearRange(edu.startDate, edu.endDate)}
			</div>
			<div>
				<div className="text-xl font-medium tracking-normal">
					{edu.studyType} {edu.area}
				</div>
				<div className="mt-1 text-sm text-muted">{edu.institution}</div>
			</div>
			{edu.honors && (
				<div className="highlight-flare w-fit mx-auto max-md:mt-1.5">
					<div className="highlight-flare-inner px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-accent">
						★ {edu.honors}
					</div>
				</div>
			)}
		</RevealOnScroll>
	);
}
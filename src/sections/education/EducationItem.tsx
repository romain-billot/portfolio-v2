import type {Education} from "../../lib/types";
import {formatYearRange} from "../../lib/format";
import {RevealOnScroll} from "../../ui/RevealOnScroll";

type Props = { edu: Education; index: number };

export function EducationItem({edu, index}: Props) {
	return (
		<RevealOnScroll
			index={index}
			className={
				"grid grid-cols-[200px_1fr_auto] items-center gap-8 border-b border-border py-[26px] max-md:grid-cols-1 max-md:gap-1.5 max-md:py-[22px]" +
				(edu.dim ? " opacity-40" : "")
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
			{edu.honors ? (
				<div className="text-xs font-medium uppercase tracking-[0.14em] text-accent max-md:pt-1.5">
					★ {edu.honors}
				</div>
			) : (
				<div/>
			)}
		</RevealOnScroll>
	);
}

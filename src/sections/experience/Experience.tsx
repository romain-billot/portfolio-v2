import {sortWorkByDate} from "@/lib/cv.ts";
import {Section} from "../../ui/Section";
import {WorkItem} from "./WorkItem";

export function Experience() {
	const work = sortWorkByDate();
	return (
		<Section id="xp" title="Expériences">
			<div className="border-t border-border">
				{work.map((w, i) => (
					<WorkItem key={`${w.name}-${w.startDate}`} work={w} index={i}/>
				))}
			</div>
		</Section>
	);
}

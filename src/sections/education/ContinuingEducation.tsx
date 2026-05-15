import cv from "../../lib/cv";
import {Section} from "../../ui/Section";
import {EducationItem} from "./EducationItem";

export function ContinuingEducation() {
	const items = cv["continuing-education"] ?? [];
	if (items.length === 0) return null;

	return (
		<Section id="formation-continue" index="05" title="Formation continue">
			<div className="border-t border-border">
				{items.map((edu, i) => (
					<EducationItem key={`${edu.institution}-${edu.startDate}`} edu={edu} index={i}/>
				))}
			</div>
		</Section>
	);
}
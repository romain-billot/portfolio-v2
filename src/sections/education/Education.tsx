import cv from "../../lib/cv";
import {Section} from "../../ui/Section";
import {EducationItem} from "./EducationItem";

export function Education() {
	return (
		<Section id="formation" index="04" title="Formation">
			<div className="border-t border-border">
				{cv.education.map((edu, i) => (
					<EducationItem key={`${edu.institution}-${edu.startDate}`} edu={edu} index={i}/>
				))}
			</div>
		</Section>
	);
}

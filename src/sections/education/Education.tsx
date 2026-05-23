import type {ReactNode} from "react";
import cv from "@/lib/cv";
import {Section} from "@/ui/Section";
import {EducationItem} from "./EducationItem";

function SubSection({title, children}: { title: string; children: ReactNode }) {
	return (
		<div className="mb-12 last:mb-0">
			<h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-text">{title}</h3>
			<div className="border-t border-border">{children}</div>
		</div>
	);
}

export function Education() {
	const continuing = cv["continuing-education"] ?? [];

	return (
		<Section id="formation" title="Formations">
			<SubSection title="Parcours académique">
				{cv.education.map((edu, i) => (
					<EducationItem key={`${edu.institution}-${edu.startDate}`} edu={edu} index={i}/>
				))}
			</SubSection>
			{continuing.length > 0 && (
				<SubSection title="Formation continue">
					{continuing.map((edu, i) => (
						<EducationItem key={`${edu.institution}-${edu.startDate}`} edu={edu} index={i}/>
					))}
				</SubSection>
			)}
		</Section>
	);
}

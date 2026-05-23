import cv from "@/lib/cv";
import {Section} from "@/ui/Section";
import {ProjectCard} from "./ProjectCard";

type Props = { onOpen: (index: number) => void };

export function Projects({onOpen}: Props) {
	const projects = cv.projects;
	return (
		<Section id="projects" title="Projets">
			<div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
				{projects.map((p, i) => (
					<ProjectCard
						key={p.name}
						project={p}
						index={i}
						onOpen={() => onOpen(i)}
					/>
				))}
			</div>
		</Section>
	);
}

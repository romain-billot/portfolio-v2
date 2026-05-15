import {getActiveProjects} from "../../lib/cv";
import {Section} from "../../ui/Section";
import {ProjectCard} from "./ProjectCard";

type Props = { onOpen: (index: number) => void };

export function Projects({onOpen}: Props) {
	const projects = getActiveProjects();
	return (
		<Section id="projects" index="02" title="Projets">
			<div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
				{projects.map((p, i) => (
					<ProjectCard
						key={p.name}
						project={p}
						index={i}
						total={projects.length}
						onOpen={() => onOpen(i)}
					/>
				))}
			</div>
		</Section>
	);
}

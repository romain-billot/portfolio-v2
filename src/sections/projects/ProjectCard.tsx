import type {Project} from "../../lib/types";
import {Tag} from "../../ui/Tag";
import {RevealOnScroll} from "../../ui/RevealOnScroll";
import {ProjectMedia} from "./ProjectMedia";
import {StatusBadge} from "../../ui/StatusBadge";

type Props = {
	project: Project;
	index: number;
	onOpen: () => void;
};

export function ProjectCard({project, index, onOpen}: Props) {
	const kind = project.kind ?? "Application web";
	const year = project.year ?? "";

	return (
		<RevealOnScroll index={index}>
			<div
				onClick={onOpen}
				data-cursor="hover"
				className="overflow-hidden rounded-2xl border border-border bg-bg-2 transition-colors hover:border-accent"
			>
				<ProjectMedia project={project}/>
				<div className="px-7 pt-7 pb-8">
					<div className="mb-5 flex justify-between text-xs uppercase tracking-[0.14em] text-muted">
						<span>{kind}</span>
						{year && <span>{year}</span>}
					</div>
					<div className="mb-3 flex items-center justify-between gap-3">
						<h3 className="text-4xl font-semibold leading-tight tracking-tight max-md:text-3xl">
							{project.name}
						</h3>
						<StatusBadge active={project.isActive} />
					</div>
					<p className="mb-5 max-w-md text-sm leading-[1.65] text-muted">
						{project.description}
					</p>
					{project.skills && project.skills.length > 0 && (
						<div className="flex min-h-18 flex-wrap content-start gap-1.5">
							{project.skills.map((s) => (
								<Tag key={s}>{s}</Tag>
							))}
						</div>
					)}
					{project.hosting && project.hosting.length > 0 && (
						<p className="mt-5 text-xs text-muted">
							Hébergé sur {project.hosting.join(" · ")}
						</p>
					)}
				</div>
			</div>
		</RevealOnScroll>
	);
}

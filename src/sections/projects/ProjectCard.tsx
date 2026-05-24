import type {Project} from "@/lib/types";
import {Tag} from "@/ui/Tag";
import {RevealOnScroll} from "@/ui/RevealOnScroll";
import {ProjectMedia} from "./ProjectMedia";
import {StatusBadge} from "@/ui/StatusBadge";

type Props = {
	project: Project;
	index: number;
	onOpen: () => void;
};

export function ProjectCard({project, index, onOpen}: Props) {
	const kind = project.kind ?? "Application web";
	const year = project.year ?? "";

	return (
		<RevealOnScroll index={index} id={project.id}>
			<button
				type="button"
				onClick={onOpen}
				className="w-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-bg-2 text-left transition-colors hover:border-accent"
			>
				<ProjectMedia project={project}/>
				<div className="px-7 pt-7 pb-8">
					<div className="mb-5 flex justify-between text-xs uppercase tracking-[0.14em] text-muted">
						<span>{kind}</span>
						{year && <span>{year}</span>}
					</div>
					<div className="mb-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
						<h3 className="text-3xl font-semibold leading-tight tracking-tight max-md:text-2xl whitespace-nowrap">
							{project.name}
						</h3>
						<StatusBadge active={project.isActive}/>
					</div>
					<p className="mb-5 max-w-md text-sm leading-[1.65] text-muted min-h-[3.3em]">
						{project.description}
					</p>
					{project.skills && project.skills.length > 0 && (
						<div className="flex flex-wrap content-start gap-1.5">
							{project.skills.map((s) => (
								<Tag key={s}>{s}</Tag>
							))}
						</div>
					)}
				</div>
			</button>
		</RevealOnScroll>
	);
}
import type {Project} from "../../lib/types";
import {Tag} from "../../ui/Tag";
import {TiltCard} from "../../ui/TiltCard";
import {RevealOnScroll} from "../../ui/RevealOnScroll";
import {ProjectMedia} from "./ProjectMedia";

type Props = {
	project: Project;
	index: number;
	total: number;
	onOpen: () => void;
};

export function ProjectCard({project, index, total, onOpen}: Props) {
	const counter = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
	const kind = project.kind ?? "Application web";
	const year = project.year ?? "";

	return (
		<RevealOnScroll index={index}>
			<TiltCard
				onClick={onOpen}
				className="overflow-hidden rounded-3xl border border-border bg-bg-2 transition-colors max-md:!transform-none hover:border-[#2a2a2c]"
			>
				<ProjectMedia project={project} counter={counter}/>
				<div className="px-7 pt-7 pb-8">
					<div className="mb-5 flex justify-between text-xs uppercase tracking-[0.14em] text-muted">
						<span>{kind}</span>
						{year && <span>{year}</span>}
					</div>
					<h3 className="mb-3 text-4xl font-semibold leading-tight tracking-tight max-md:text-3xl">
						{project.name}
					</h3>
					<p className="mb-5 max-w-md text-sm leading-[1.65] text-muted">
						{project.description}
					</p>
					{project.skills && project.skills.length > 0 && (
						<div className="flex flex-wrap gap-1.5">
							{project.skills.map((s) => (
								<Tag key={s}>{s}</Tag>
							))}
						</div>
					)}
				</div>
			</TiltCard>
		</RevealOnScroll>
	);
}

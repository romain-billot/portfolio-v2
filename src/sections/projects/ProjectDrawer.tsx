import type {Project} from "@/lib/types.ts";
import {Button} from "../../ui/Button";
import {GitHubIcon} from "../../ui/icons/GitHubIcon";
import {StatusBadge} from "../../ui/StatusBadge";
import {Tag} from "../../ui/Tag";
import {CircleButton} from "../../ui/CircleButton";
import {ProjectDrawerCols} from "./ProjectDrawerCols";
import {ProjectMedia} from "./ProjectMedia";

type Props = {
	project: Project | null;
	onClose: () => void;
};

export function ProjectDrawer({project, onClose}: Props) {
	const open = project !== null;
	const meta = project
		? `${project.year ?? ""} — ${project.kind ?? ""}`.replace(/—\s*—/g, "—").replace(/^—\s*/, "").replace(/—\s*$/, "").trim()
		: "";

	return (
		<>
			<div
				className={"overlay" + (open ? " open" : "")}
				onClick={onClose}
				aria-hidden="true"
			/>
			<aside
				className={"drawer" + (open ? " open" : "")}
				aria-hidden={!open}
			>
				 {project && (
					<>
						<div className="mb-9 flex items-center justify-between">
							<span className="text-xs uppercase tracking-[0.16em] text-muted">{meta}</span>
							<CircleButton onClick={onClose} variant="close"/>
						</div>
						<div className="mb-6 flex items-center justify-between gap-4">
							<h3 className="text-5xl font-semibold leading-tight tracking-tight max-md:text-4xl">
								{project.name}
							</h3>
							<StatusBadge active={project.isActive}/>
						</div>
						{project.sample && (
							<div className="mb-7 overflow-hidden rounded-2xl border border-border">
								<ProjectMedia project={project}/>
							</div>
						)}
						<ProjectDrawerCols project={project}/>
						{project.skills && project.skills.length > 0 && (
							<div className="mt-7 border-t border-border pt-7">
								<div className="mb-3.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
									Stack technique
								</div>
								<div className="flex flex-wrap gap-1.5">
									{project.skills.map((s) => (
										<Tag key={s}>{s}</Tag>
									))}
								</div>
							</div>
						)}
						{project.hosting && project.hosting.length > 0 && (
							<div className="mt-7 border-t border-border pt-7">
								<div className="mb-3.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
									Hébergement
								</div>
								<div className="flex flex-wrap gap-1.5">
									{project.hosting.map((h) => (
										<Tag key={h}>{h}</Tag>
									))}
								</div>
							</div>
						)}
						<div className="mt-9 flex flex-wrap gap-2.5">
							{project.github && (
								<Button
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									data-cursor="hover"
								>
									<GitHubIcon/>
									GitHub
								</Button>
							)}
							{project.url && (
								<Button
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									data-cursor="hover"
								>
									Voir l&apos;app →
								</Button>
							)}
						</div>
					</>
				)}
			</aside>

		</>
	);
}

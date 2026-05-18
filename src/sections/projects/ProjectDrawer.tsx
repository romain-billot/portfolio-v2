import type {Project} from "../../lib/types";
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
				<div className="absolute top-6 right-6">
					<CircleButton onClick={onClose} variant="close"/>
				</div>
				{project && (
					<>
						<div className="mb-9 text-xs uppercase tracking-[0.16em] text-muted">{meta}</div>
						<h3 className="mb-6 text-5xl font-semibold leading-tight tracking-tight max-md:text-4xl">
							{project.name}
						</h3>
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
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									data-cursor="hover"
									className="inline-flex items-center gap-2 whitespace-nowrap rounded-3xl border border-border bg-transparent px-6 py-3 text-sm font-medium tracking-tight text-text transition-colors hover:border-text"
								>
									GitHub →
								</a>
							)}
							{project.url && (
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									data-cursor="hover"
									className="inline-flex items-center gap-2 whitespace-nowrap rounded-3xl border border-border bg-transparent px-6 py-3 text-sm font-medium tracking-tight text-text transition-colors hover:border-text"
								>
									Voir l&apos;app →
								</a>
							)}
						</div>
					</>
				)}
			</aside>
		</>
	);
}

import type {Project} from "../../lib/types";
import {Tag} from "../../ui/Tag";
import {ProjectDrawerCols} from "./ProjectDrawerCols";

type Props = {
	project: Project | null;
	index: number | null;
	total: number;
	onClose: () => void;
};

export function ProjectDrawer({project, index, total, onClose}: Props) {
	const open = project !== null;
	const meta = project
		? `Projet ${String((index ?? 0) + 1).padStart(2, "0")} — ${project.year ?? ""} — ${
			project.kind ?? ""
		}`.replace(/—\s*—/g, "—").replace(/—\s*$/, "").trim()
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
				<button
					onClick={onClose}
					aria-label="fermer"
					data-cursor="hover"
					className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-transparent text-lg text-text transition-colors hover:border-accent hover:text-accent"
				>
					×
				</button>
				{project && (
					<>
						<div className="mb-9 text-xs uppercase tracking-[0.16em] text-muted">{meta}</div>
						<h3 className="mb-2 text-5xl font-semibold leading-tight tracking-tight max-md:text-4xl">
							{project.name}
						</h3>
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
						{total > 1 && (
							<div
								className="mt-9 border-t border-border pt-6 text-xs uppercase tracking-[0.16em] text-muted">
								{String((index ?? 0) + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
							</div>
						)}
					</>
				)}
			</aside>
		</>
	);
}

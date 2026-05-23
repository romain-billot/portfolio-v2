import {useEffect, useRef} from "react";
import type {Project} from "@/lib/types.ts";
import {Button} from "../../ui/Button";
import {GitHubIcon} from "../../ui/icons/GitHubIcon";
import {StatusBadge} from "../../ui/StatusBadge";
import {Tag} from "../../ui/Tag";
import {CircleButton} from "../../ui/CircleButton";
import {ProjectDrawerCols} from "./ProjectDrawerCols";

type Props = {
	project: Project | null;
	onClose: () => void;
};

function TagSection({label, items}: { label: string; items: string[] }) {
	if (!items.length) return null;
	return (
		<div className="mt-7 border-t border-border pt-7">
			<div className="mb-3.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">{label}</div>
			<div className="flex flex-wrap gap-1.5">
				{items.map((s) => <Tag key={s}>{s}</Tag>)}
			</div>
		</div>
	);
}

export function ProjectDrawer({project, onClose}: Props) {
	const open = project !== null;
	const asideRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (open && asideRef.current) {
			const btn = asideRef.current.querySelector<HTMLButtonElement>("button");
			btn?.focus();
		}
	}, [open]);

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
				ref={asideRef}
				className={"drawer" + (open ? " open" : "")}
				role="dialog"
				aria-modal="true"
				aria-label={project?.name ?? "Projet"}
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
						<ProjectDrawerCols project={project}/>
						<TagSection label="Stack" items={project.skills ?? []}/>
						<TagSection label="Hébergement" items={project.hosting ?? []}/>
						<div className="mt-9 flex flex-wrap justify-center gap-2.5">
							{project.github && (
								<Button
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
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

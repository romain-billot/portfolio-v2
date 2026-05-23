import type {Project} from "@/lib/types.ts";

type Col = { title: string; body?: string };

export function ProjectDrawerCols({project}: { project: Project }) {
	const cols: Col[] = [
		{title: "Contexte", body: project.context},
		{title: "Défis", body: project.challenges},
		{title: "Apprentissages", body: project.learnings},
	].filter((c) => c.body);

	if (cols.length === 0) return null;

	return (
		<div className="my-8 grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-6">
			{cols.map((c) => (
				<div key={c.title}>
					<h5 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
						{c.title}
					</h5>
					<p className="text-sm leading-[1.65] text-text">{c.body}</p>
				</div>
			))}
		</div>
	);
}

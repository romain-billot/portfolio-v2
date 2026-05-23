import type {Project} from "@/lib/types";

type Props = { project: Project };

function initials(name: string): string {
	const allcap = name.match(/\b[A-Z]{2,}\b/);
	if (allcap) return allcap[0];
	const caps = name.match(/[A-Z]+/g);
	if (caps && caps.length) return caps.join("").slice(0, 3);
	return name
		.split(/[\s-]+/)
		.map((w) => w[0])
		.filter(Boolean)
		.slice(0, 3)
		.join("")
		.toUpperCase();
}

export function ProjectMedia({project}: Props) {
	return (
		<div
			className="relative w-full overflow-hidden border-b border-border bg-linear-to-br from-[#001a33] to-bg" style={{aspectRatio: "16/9.05"}}>
			<div
				className="absolute inset-0"
				style={{
					backgroundImage:
						"linear-gradient(rgba(0,102,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.05) 1px, transparent 1px)",
					backgroundSize: "36px 36px",
				}}
			/>
			<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(64px,8vw,104px)] font-bold tracking-tighter text-accent">
				{initials(project.name)}
			</span>
			{project.sample && (
				project.sample.endsWith(".mp4") ? (
					<video
						className="absolute inset-0 z-10 h-full w-full object-contain object-top"
						src={project.sample}
						autoPlay
						loop
						muted
						playsInline
						style={{backgroundColor: project.sampleBackground ?? "var(--color-bg)"}}
					/>
				) : (
					<div
						className="absolute inset-0 z-10 bg-contain bg-top bg-no-repeat"
						style={{
							backgroundImage: `url(${project.sample})`,
							backgroundColor: project.sampleBackground ?? "var(--color-bg)",
						}}
					/>
				)
			)}
		</div>
	);
}

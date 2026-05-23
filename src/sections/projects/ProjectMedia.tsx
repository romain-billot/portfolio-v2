import {useState} from "react";
import type {Project} from "@/lib/types";

type Props = { project: Project };

export function ProjectMedia({project}: Props) {
	const [loaded, setLoaded] = useState(false);
	const mediaClass = `absolute inset-0 z-10 h-full w-full object-contain object-top transition-opacity duration-500${loaded ? "" : " opacity-0"}`;

	return (
		<div className="skeleton relative w-full overflow-hidden border-b border-border" style={{aspectRatio: "16/9.05"}}>
			{project.sample && (
				project.sample.endsWith(".mp4") ? (
					<video className={mediaClass} src={project.sample} autoPlay loop muted playsInline
						onCanPlay={() => setLoaded(true)}
						style={{backgroundColor: project.sampleBackground ?? "var(--color-bg)"}}/>
				) : (
					<img className={mediaClass} src={project.sample} alt={project.name}
						onLoad={() => setLoaded(true)}
						style={{backgroundColor: project.sampleBackground ?? "var(--color-bg)"}}/>
				)
			)}
		</div>
	);
}
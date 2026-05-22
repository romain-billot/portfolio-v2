import cv from "../../lib/cv";
import {CV_PDF} from "../nav/links";

const linkClass =
	"flex items-center gap-3 text-base tracking-tight text-muted transition-[color,transform] duration-250 hover:text-accent hover:-translate-x-1";

export function FooterLinks() {
	return (
		<div className="flex flex-col items-end gap-3.5 max-md:items-start">
			{cv.basics.profiles.map((p) => (
				<a
					key={p.network}
					href={p.url}
					target="_blank"
					rel="noopener noreferrer"
					className={linkClass}
					
				>
					{p.network} <span>→</span>
				</a>
			))}
			<a href={`mailto:${cv.basics.email}`} className={linkClass} >
				{cv.basics.email} <span>→</span>
			</a>
			<a href={CV_PDF} download className={linkClass} >
				<span>↓</span> Télécharger CV
			</a>
		</div>
	);
}

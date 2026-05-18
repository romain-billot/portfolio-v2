import cv from "../../lib/cv";
import {Section} from "../../ui/Section";

const linkedin = cv.basics.profiles.find((p) => p.network === "LinkedIn")?.url ?? "#";
const github = cv.basics.profiles.find((p) => p.network === "GitHub")?.url ?? "#";

const MailIcon = () => (
	<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
		<rect x="2" y="4" width="20" height="16" rx="2"/>
		<path d="m2 7 10 7 10-7"/>
	</svg>
);

const LinkedInIcon = () => (
	<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
		<rect x="2" y="9" width="4" height="12"/>
		<circle cx="4" cy="4" r="2"/>
	</svg>
);

const GitHubIcon = () => (
	<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
		<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
	</svg>
);

const links = [
	{label: "Mail", href: `mailto:${cv.basics.email}`, external: false, icon: <MailIcon/>},
	{label: "LinkedIn", href: linkedin, external: true, icon: <LinkedInIcon/>},
	{label: "GitHub", href: github, external: true, icon: <GitHubIcon/>},
];

const btnClass =
	"flex items-center justify-center gap-2.5 rounded-full border border-border px-6 py-3 text-sm tracking-tight text-muted transition-[color,border-color] duration-250 hover:border-accent hover:text-accent w-40 max-md:w-full";

export function Contact() {
	return (
		<Section id="contact" title="Contact">
			<p className="mb-8 text-base leading-relaxed tracking-tight text-muted">
				Ouvert aux opportunités fullstack ou backend. {cv.basics.location.city} ou télétravail.
			</p>
			<div className="flex flex-wrap gap-3">
				{links.map(({label, href, external, icon}) => (
					<a
						key={label}
						href={href}
						data-cursor="hover"
						{...(external ? {target: "_blank", rel: "noopener noreferrer"} : {})}
						className={btnClass}
					>
						{icon}
						{label}
					</a>
				))}
			</div>
		</Section>
	);
}
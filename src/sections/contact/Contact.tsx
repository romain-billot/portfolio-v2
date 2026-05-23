import cv from "@/lib/cv";
import {Button} from "@/ui/Button";
import {GitHubIcon} from "@/ui/icons/GitHubIcon";
import {LinkedInIcon} from "@/ui/icons/LinkedInIcon";
import {MailIcon} from "@/ui/icons/MailIcon";
import {Section} from "@/ui/Section";

const linkedin = cv.basics.profiles.find((p) => p.network === "LinkedIn")?.url ?? "#";
const github = cv.basics.profiles.find((p) => p.network === "GitHub")?.url ?? "#";

const links = [
	{label: "Mail", href: `mailto:${cv.basics.email}`, external: false, icon: <MailIcon/>, variant: "primary" as const},
	{label: "LinkedIn", href: linkedin, external: true, icon: <LinkedInIcon/>, variant: "outline" as const},
	{label: "GitHub", href: github, external: true, icon: <GitHubIcon/>, variant: "outline" as const},
];

export function Contact() {
	return (
		<Section id="contact" title="Contact">
			<p className="mb-8 text-base leading-relaxed tracking-tight text-muted">
				Ouvert aux opportunités fullstack ou backend. {cv.basics.location.city} ou télétravail.
			</p>
			<div className="flex flex-wrap gap-3">
				{links.map(({label, href, external, icon, variant}) => (
					<Button
						key={label}
						href={href}
						variant={variant}
						
						{...(external ? {target: "_blank", rel: "noopener noreferrer"} : {})}
					>
						{icon}
						{label}
					</Button>
				))}
			</div>
		</Section>
	);
}
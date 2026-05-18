import {RevealOnScroll} from "../../ui/RevealOnScroll";

type Props = { title: string; skills: string[]; dim?: boolean };

export function SkillColumn({title, skills, dim = false}: Props) {
	return (
		<RevealOnScroll className={dim ? "opacity-35" : ""}>
			<h4 className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-muted">
				{title}
			</h4>
			<ul className="list-none">
				{skills.map((s, i) => (
					<li
						key={s}
						className={
							"py-2.25 text-sm tracking-tight text-text" +
							(i < skills.length - 1 ? " border-b border-border/60" : "")
						}
					>
						{s}
					</li>
				))}
			</ul>
		</RevealOnScroll>
	);
}

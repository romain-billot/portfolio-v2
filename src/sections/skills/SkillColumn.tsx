import {useId, useState} from "react";
import {RevealOnScroll} from "@/ui/RevealOnScroll";

type Props = { title: string; skills: string[]; dim?: boolean };

export function SkillColumn({title, skills, dim = false}: Props) {
	const [open, setOpen] = useState(false);
	const listId = useId();
	return (
		<RevealOnScroll className={dim ? "opacity-35 transition-opacity hover:opacity-100" : ""}>
			<h3 className="mb-5 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted max-sm:mb-0">
				<button
					type="button"
					onClick={() => setOpen((o) => !o)}
					aria-expanded={open}
					aria-controls={listId}
					className="inline-flex w-full items-center justify-center gap-2 uppercase sm:pointer-events-none max-sm:border-b max-sm:border-border/60 max-sm:py-3"
				>
					{title}
					<span className="text-[10px] text-muted sm:hidden">({skills.length})</span>
					<svg
						aria-hidden="true"
						viewBox="0 0 12 12"
						className={"size-3 transition-transform sm:hidden" + (open ? " rotate-180" : "")}
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
					>
						<path d="M3 4.5l3 3 3-3"/>
					</svg>
				</button>
			</h3>
			<ul id={listId} className={"list-none" + (open ? "" : " max-sm:hidden")}>
				{skills.map((s, i) => (
					<li
						key={s}
						className={
							"py-2.25 text-center text-sm tracking-tight text-text" +
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

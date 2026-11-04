import {useState} from "react";
import {RevealOnScroll} from "@/ui/RevealOnScroll";
import {CircleButton} from "@/ui/CircleButton";
import {useIsMobile} from "@/hooks/useIsMobile";

type Props = { title: string; skills: string[]; dim?: boolean };

export function SkillColumn(props: Props) {
	const isMobile = useIsMobile();
	return isMobile ? <MobileSkillColumn {...props}/> : <DesktopSkillColumn {...props}/>;
}

function DesktopSkillColumn({title, skills, dim = false}: Props) {
	return (
		<RevealOnScroll className={dim ? "opacity-35 transition-opacity hover:opacity-100" : ""}>
			<h3 className="mb-5 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted">
				{title}
			</h3>
			<ul className="list-none">
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

function MobileSkillColumn({title, skills, dim = false}: Props) {
	const [open, setOpen] = useState(false);
	const toggle = () => setOpen((o) => !o);

	return (
		<RevealOnScroll
			className={
				"group/skill border-b border-border transition-opacity" +
				(dim ? (open ? " opacity-100" : " opacity-35") : "")
			}
		>
			<div
				role="button"
				tabIndex={0}
				onClick={toggle}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						toggle();
					}
				}}
				aria-expanded={open}
				aria-label={title}
				className="flex cursor-pointer items-center justify-between gap-3 py-4"
			>
				<h3 className="text-sm font-medium uppercase tracking-[0.16em] text-text">
					{title}
					<span className="ml-2 tracking-normal text-muted">({skills.length})</span>
				</h3>
				<CircleButton variant="toggle" active={open}/>
			</div>
			<div
				className={
					"overflow-hidden transition-[max-height] duration-500 ease-in-out" +
					(open ? " max-h-150" : " max-h-0")
				}
			>
				<ul className="list-none pb-4">
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
			</div>
		</RevealOnScroll>
	);
}

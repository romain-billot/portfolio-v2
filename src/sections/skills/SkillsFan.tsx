import {getFanSkills} from "../../lib/cv";
import {useFanSpread} from "../../hooks/useFanSpread";
import {FanCard} from "./FanCard";

export function SkillsFan() {
	const skills = getFanSkills(7);
	const {containerRef, registerCard} = useFanSpread({count: skills.length});

	return (
		<div
			ref={containerRef}
			className="fan relative mb-25 flex h-95 items-center justify-center max-md:mb-15 max-md:h-auto max-md:flex-col max-md:gap-2.5"
		>
			{skills.map((s, i) => (
				<FanCard
					key={s.name}
					ref={registerCard(i)}
					num={`${String(i + 1).padStart(2, "0")} / ${String(skills.length).padStart(2, "0")}`}
					label={s.name}
					role={s.category ?? s.keywords[0] ?? ""}
				/>
			))}
		</div>
	);
}

import {groupSkillsByCategory} from "../../lib/cv";
import {SkillColumn} from "./SkillColumn";

export function SkillsGrid() {
	const groups = groupSkillsByCategory();
	return (
		<div
			className="grid grid-cols-5 gap-8 border-t border-border pt-12 max-md:grid-cols-2 max-md:gap-7 max-sm:grid-cols-1 max-sm:gap-5">
			{groups.map((g) => (
				<SkillColumn
					key={g.category}
					title={g.category}
					skills={g.skills.map((s) => s.name)}
					dim={g.dim}
				/>
			))}
		</div>
	);
}

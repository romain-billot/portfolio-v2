import {groupSkillsByCategory} from "@/lib/cv.ts";
import {Section} from "../../ui/Section";
import {SkillColumn} from "./SkillColumn";

export function Skills() {
	const groups = groupSkillsByCategory();
	return (
		<Section id="skills" title="Compétences">
			<div className="grid grid-cols-4 gap-8 border-border max-lg:grid-cols-2 max-lg:gap-7 max-sm:grid-cols-1 max-sm:gap-5">
				{groups.map((g) => (
					<SkillColumn
						key={g.category}
						title={g.category}
						skills={g.skills.map((s) => s.name)}
						dim={g.dim}
					/>
				))}
			</div>
		</Section>
	);
}

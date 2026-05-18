import {groupSkillsByCategory} from "../../lib/cv";
import {Section} from "../../ui/Section";
import {SkillColumn} from "./SkillColumn";

export function Skills() {
	const groups = groupSkillsByCategory();
	return (
		<Section id="skills" index="01" title="Compétences">
			<div className="grid grid-cols-3 gap-8 border-border max-md:grid-cols-2 max-md:gap-7 max-sm:grid-cols-1 max-sm:gap-5">
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

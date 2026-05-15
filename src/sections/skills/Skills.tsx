import {Section} from "../../ui/Section";
import {SkillsFan} from "./SkillsFan";
import {SkillsGrid} from "./SkillsGrid";

export function Skills() {
	return (
		<Section id="skills" index="01" title="Compétences">
			<SkillsFan/>
			<SkillsGrid/>
		</Section>
	);
}

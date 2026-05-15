import cvJson from "@/cv.json";
import type {CV, Project, Skill, Work} from "./types";

const cv = cvJson as unknown as CV;

export default cv;

export const SKILL_CATEGORIES = [
	"Frontend",
	"Backend",
	"Données + DevOps",
	"Fullstack",
	"Avant le code",
] as const;

export type SkillCategory = (typeof SKILL_CATEGORIES)[number];

export function getActiveProjects(): Project[] {
	return cv.projects.filter((p) => p.isActive);
}

export function groupSkillsByCategory(): { category: SkillCategory; skills: Skill[]; dim: boolean }[] {
	return SKILL_CATEGORIES.map((category) => {
		const skills = cv.skills.filter((s) => (s.category ?? s.keywords[0]) === category);
		const dim = skills.length > 0 && skills.every((s) => s.dim);
		return {category, skills, dim};
	}).filter((group) => group.skills.length > 0);
}

export function getFanSkills(count = 7): Skill[] {
	const order: SkillCategory[] = ["Frontend", "Backend", "Données + DevOps", "Fullstack"];
	const ranked: Skill[] = [];
	for (const cat of order) {
		for (const s of cv.skills) {
			if ((s.category ?? s.keywords[0]) === cat && !s.dim) ranked.push(s);
		}
	}
	return ranked.slice(0, count);
}

export function sortWorkByDate(): Work[] {
	return [...cv.work].sort((a, b) => (a.startDate < b.startDate ? 1 : -1));
}

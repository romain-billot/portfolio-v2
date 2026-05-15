import {useState} from "react";
import {getActiveProjects} from "./lib/cv";
import {useEscape} from "./hooks/useEscape";
import {useScrollLock} from "./hooks/useScrollLock";
import {Cursor} from "./ui/Cursor";
import {Nav} from "./sections/nav/Nav";
import {Hero} from "./sections/hero/Hero";
import {Skills} from "./sections/skills/Skills";
import {Projects} from "./sections/projects/Projects";
import {Experience} from "./sections/experience/Experience";
import {Education} from "./sections/education/Education";
import {ContinuingEducation} from "./sections/education/ContinuingEducation";
import {Footer} from "./sections/footer/Footer";
import {ProjectDrawer} from "./sections/projects/ProjectDrawer";

export default function Portfolio() {
	const [drawerIndex, setDrawerIndex] = useState<number | null>(null);
	const projects = getActiveProjects();
	const selected = drawerIndex !== null ? (projects[drawerIndex] ?? null) : null;

	const close = () => setDrawerIndex(null);
	useEscape(close, drawerIndex !== null);
	useScrollLock(drawerIndex !== null);

	return (
		<>
			<Cursor/>
			<Nav/>
			<Hero/>
			<Skills/>
			<Projects onOpen={(i) => setDrawerIndex(i)}/>
			<Experience/>
			<Education/>
			<ContinuingEducation/>
			<Footer/>
			<ProjectDrawer
				project={selected}
				index={drawerIndex}
				total={projects.length}
				onClose={close}
			/>
		</>
	);
}

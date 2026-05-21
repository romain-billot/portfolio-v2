import cv from "../../lib/cv";
import {HeroIdentity} from "./HeroIdentity";
import {HeroPhoto} from "./HeroPhoto";
import {HeroBio} from "./HeroBio";
import {HeroHighlight} from "./HeroHighlight";

export function Hero() {
	return (
		<section
			id="hero"
			className="relative mx-auto flex max-w-7xl flex-col overflow-hidden px-8 pt-45 pb-15 max-md:px-6 max-md:pt-28"
		>
			<div className="relative z-10 flex items-end gap-15 max-md:flex-col max-md:items-start max-md:gap-10">
				<div className="flex-[1.35] min-w-0">
					<HeroIdentity
						name={cv.basics.name}
						tagline={`${cv.basics.label} · ${cv.basics.location.city} / Remote`}
					/>
				</div>
				<div className="flex-[0.65] min-w-0">
					<HeroPhoto src={cv.basics.image} alt={cv.basics.name}/>
				</div>
			</div>
			<div
				className="relative z-10 mt-20 flex items-stretch gap-6 border-t border-border pt-11 max-md:mt-15 max-md:flex-col max-md:gap-4 max-md:pt-8">
				<div className="flex-[1.4] min-w-0">
					<HeroBio>{cv.basics.summary}</HeroBio>
				</div>
				{cv.highlights.map((h) => (
					<div key={h.title} className="flex-1 min-w-0">
						<HeroHighlight title={h.title} detail={h.detail}/>
					</div>
				))}
			</div>
		</section>
	);
}

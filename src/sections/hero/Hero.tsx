import cv from "@/lib/cv";
import {HeroIdentity} from "./HeroIdentity";
import {HeroPhoto} from "./HeroPhoto";
import {HeroBio} from "./HeroBio";
import {HeroHighlight} from "./HeroHighlight";

export function Hero() {
	return (
		<section
			id="hero"
			className="relative mx-auto flex max-w-7xl flex-col overflow-hidden px-8 pt-36 max-md:px-6 max-md:pt-28"
		>
			<div className="relative z-10 flex items-center gap-8 max-md:flex-col max-md:items-center max-md:gap-10">
				<div className="shrink-0 md:order-1">
					<HeroPhoto src={cv.basics.image} alt={cv.basics.name}/>
				</div>
				<div className="flex-1 min-w-0 md:order-2 max-md:w-full">
					<HeroIdentity
						name={cv.basics.name}
						label={cv.basics.label}
						location={`${cv.basics.location.city} / Remote`}
					/>
				</div>
			</div>
			<div
				className="relative z-10 mt-20 flex items-stretch gap-6 border-t border-border pt-11 max-md:mt-15 max-md:flex-col max-md:gap-4 max-md:pt-8">
				<div className="flex-[1.4] min-w-0">
					<HeroBio>{cv.basics.summary}</HeroBio>
				</div>
				{cv.highlights.map((h) => (
					<div key={h.title} className="flex-1 min-w-0">
						<HeroHighlight title={h.title} detail={h.detail} href={h.href}/>
					</div>
				))}
			</div>
		</section>
	);
}

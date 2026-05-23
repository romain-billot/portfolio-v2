import {useState} from "react";

type Props = { src: string; alt: string };

export function HeroPhoto({src, alt}: Props) {
	const [loaded, setLoaded] = useState(false);

	return (
		<div className="skeleton relative aspect-square w-54 max-w-full justify-self-center overflow-hidden rounded-full max-md:w-47 max-md:justify-self-start">
			<img
				src={src}
				alt={alt}
				className={`absolute inset-0 z-30 h-full w-full object-cover filter-[grayscale(0.25)] transition-opacity duration-500${loaded ? "" : " opacity-0"}`}
				onLoad={() => setLoaded(true)}
				onError={(e) => {
					(e.currentTarget as HTMLImageElement).style.display = "none";
				}}
			/>
		</div>
	);
}

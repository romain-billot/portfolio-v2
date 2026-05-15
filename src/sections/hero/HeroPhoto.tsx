type Props = { src: string; alt: string };

export function HeroPhoto({src, alt}: Props) {
	return (
		<div
			className="relative aspect-square w-54 max-w-full justify-self-center overflow-hidden rounded-full bg-bg-2 max-md:w-47 max-md:justify-self-start">
			<div
				className="absolute inset-0 z-0"
				style={{
					background:
						"radial-gradient(circle at 30% 20%, rgba(0,102,255,0.12), transparent 55%), linear-gradient(155deg, #1E293B 0%, #020617 100%)",
				}}
			/>
			<small className="absolute top-7 right-7 z-20 text-xs uppercase tracking-[0.2em] text-muted">
				RB / 2026
			</small>
			<span
				className="absolute bottom-7 left-7 z-10 text-8xl font-bold leading-[0.85] tracking-tighter text-text">
        R<br/>B
      </span>
			<img
				src={src}
				alt={alt}
				className="absolute inset-0 z-30 h-full w-full object-cover [filter:grayscale(0.25)_contrast(1.06)]"
				onError={(e) => {
					(e.currentTarget as HTMLImageElement).style.display = "none";
				}}
			/>
		</div>
	);
}

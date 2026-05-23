import cv from "@/lib/cv";

export function Footer() {
	return (
		<footer className="mx-auto max-w-7xl border-t border-border px-8 py-8 mt-18 max-md:px-6 max-md:mt-13">
			<div className="flex justify-center text-xs uppercase tracking-[0.14em] text-muted">
				<span>© {new Date().getFullYear()} {cv.basics.name}</span>
			</div>
		</footer>
	);
}
import cv from "../../lib/cv";
import {FooterLinks} from "./FooterLinks";

export function Footer() {
	return (
		<footer
			id="contact"
			className="mx-auto mt-15 max-w-7xl border-t border-border px-8 pt-40 pb-15 max-md:px-6 max-md:pt-25 max-md:pb-13"
		>
			<h2 className="mb-15 text-[clamp(56px,9vw,140px)] font-bold leading-none tracking-tight max-sm:text-[clamp(44px,14vw,72px)]">
				On se <span className="text-dim">parle ?</span>
			</h2>
			<div
				className="grid grid-cols-2 items-end gap-15 border-t border-border pt-12 max-md:grid-cols-1 max-md:items-start max-md:gap-10">
				<p className="max-w-md text-base leading-relaxed tracking-tight text-muted">
					Ouvert aux opportunités fullstack. {cv.basics.location.city} ou télétravail.
				</p>
				<FooterLinks/>
			</div>
			<div
				className="mt-20 flex justify-between text-xs uppercase tracking-[0.14em] text-muted max-md:mt-13 max-md:flex-col max-md:gap-2">
				<span>© 2026 {cv.basics.name}</span>
				<span>Montréal · 45.5° N — 73.5° O</span>
			</div>
		</footer>
	);
}

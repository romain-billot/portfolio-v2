import {useScrollLock} from "@/hooks/useScrollLock";
import {CV_PDF, NAV_LINKS} from "./links";

type Props = { open: boolean; onClose: () => void };

const LINK_CLASS = "flex items-center py-3 text-lg tracking-tight text-text";

export function MobileMenu({open, onClose}: Props) {
	useScrollLock(open);

	return (
		<div className={`fixed inset-0 z-99 ${open ? "block" : "hidden"}`} onClick={onClose}>
			<div className="flex flex-col gap-2 bg-bg-2/95 px-8 pt-23 pb-8 backdrop-blur-xl" onClick={e => e.stopPropagation()}>
				{NAV_LINKS.map((l) => (
					<a key={l.href} href={l.href} onClick={onClose} className={LINK_CLASS}>
						{l.label}
					</a>
				))}
				<a href={CV_PDF} download onClick={onClose} className={LINK_CLASS}>
					Télécharger CV ↓
				</a>
			</div>
		</div>
	);
}

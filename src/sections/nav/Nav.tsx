import {useState} from "react";
import cv from "../../lib/cv";
import {CV_PDF, NAV_LINKS} from "./links";
import {MobileMenu} from "./MobileMenu";

export function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav
                className="fixed top-4 left-1/2 z-100 flex h-13 w-auto -translate-x-1/2 items-center gap-10 rounded-4xl border border-border bg-bg-2/55 px-8 text-sm tracking-tight backdrop-blur-xl backdrop-saturate-150 max-md:w-[calc(100%-32px)] max-md:justify-between max-md:gap-0">
                <a href="#hero" className="font-semibold tracking-wider">
                    {cv.basics.name}
                </a>
                <div className="flex items-center gap-7 max-md:hidden">
                    {NAV_LINKS.map((l) => (
                        <a key={l.href} href={l.href} className="text-muted transition-colors hover:text-text">
                            {l.label}
                        </a>
                    ))}
                    <a
                        href={CV_PDF}
                        download
                        className="rounded-3xl bg-text px-4 py-2 font-medium text-bg transition-colors hover:bg-white"
                    >
                        Télécharger CV
                    </a>
                </div>
                <button
                    className={`nav-burger md:hidden${open ? " open" : ""}`}
                    onClick={() => setOpen((o) => !o)}
                    aria-label="menu"
                >
                    <span/>
                    <span/>
                    <span/>
                </button>
            </nav>
            <MobileMenu open={open} onClose={() => setOpen(false)}/>
        </>
    );
}

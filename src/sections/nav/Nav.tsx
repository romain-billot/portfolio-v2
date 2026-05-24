import {useState} from "react";
import cv from "@/lib/cv";
import {useEscape} from "@/hooks/useEscape";
import {CV_PDF, NAV_LINKS} from "./links";
import {MobileMenu} from "./MobileMenu";

export function Nav() {
    const [open, setOpen] = useState(false);
    useEscape(() => setOpen(false), open);

    return (
        <>
            <nav
                className="fixed top-4 left-1/2 z-100 flex h-13 w-auto -translate-x-1/2 items-center gap-12 rounded-4xl border border-border bg-bg-2/55 px-10 text-sm tracking-tight whitespace-nowrap backdrop-blur-xl backdrop-saturate-150 max-[900px]:w-[calc(100%-100px)] max-[900px]:justify-between max-[900px]:gap-0 max-[900px]:px-6">
                <a href="#hero" className="font-semibold tracking-wider">
                    {cv.basics.name}
                </a>
                <div className="flex items-center gap-8 max-[900px]:hidden">
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
                    className={`nav-burger min-[900px]:hidden${open ? " open" : ""}`}
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

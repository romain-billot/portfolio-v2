import {useEffect, useState} from "react";

// Aligné sur le breakpoint Tailwind `sm` (640px) : en dessous, on est en mobile.
const MOBILE_QUERY = "(max-width: 639.98px)";

export function useIsMobile(): boolean {
	const [isMobile, setIsMobile] = useState(
		() => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches,
	);

	useEffect(() => {
		const mql = window.matchMedia(MOBILE_QUERY);
		const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
		mql.addEventListener("change", onChange);
		return () => mql.removeEventListener("change", onChange);
	}, []);

	return isMobile;
}

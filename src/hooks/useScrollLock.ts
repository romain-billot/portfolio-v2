import {useEffect} from "react";

export function useScrollLock(locked: boolean): void {
	useEffect(() => {
		document.body.style.overflow = locked ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [locked]);
}

import {useCursor} from "../hooks/useCursor";

export function Cursor() {
	const {dotRef, ringRef} = useCursor();
	return (
		<>
			<div className="cursor-ring" ref={ringRef} aria-hidden="true"/>
			<div className="cursor-dot" ref={dotRef} aria-hidden="true"/>
		</>
	);
}

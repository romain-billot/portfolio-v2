const MONTHS_FR_SHORT = [
	"jan", "fév", "mars", "avr", "mai", "juin",
	"juil", "août", "sept", "oct", "nov", "déc",
];

function parseYM(value: string): { year: number; month: number } | null {
	const match = /^(\d{4})-(\d{2})/.exec(value);
	if (!match) return null;
	return {year: Number(match[1]), month: Number(match[2])};
}

function formatPart(value: string): string {
	const ym = parseYM(value);
	if (!ym) return value;
	return `${MONTHS_FR_SHORT[ym.month - 1]} ${ym.year}`;
}

export function formatDateRange(start: string, end: string | null): string {
	const startPart = formatPart(start);
	if (!end) return `${startPart} → présent`;
	const startYM = parseYM(start);
	const endYM = parseYM(end);
	if (startYM && endYM && startYM.year === endYM.year) {
		return `${MONTHS_FR_SHORT[startYM.month - 1]} — ${MONTHS_FR_SHORT[endYM.month - 1]} ${endYM.year}`;
	}
	if (startYM && endYM && endYM.year - startYM.year >= 2) {
		return `${startYM.year} — ${endYM.year}`;
	}
	return `${startPart} → ${formatPart(end)}`;
}

export function formatYearRange(start: string, end: string | null): string {
	const startYM = parseYM(start);
	const endYM = end ? parseYM(end) : null;
	if (!startYM) return `${start} — ${end ?? "présent"}`;
	if (!endYM) return `${startYM.year} — présent`;
	if (startYM.year === endYM.year && startYM.month === endYM.month) {
		return `${MONTHS_FR_SHORT[startYM.month - 1]} ${startYM.year}`;
	}
	return `${startYM.year} — ${endYM.year}`;
}

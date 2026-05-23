export type Profile = {
	network: string;
	username: string | null;
	url: string;
};

export type Location = {
	address: string;
	postalCode: string;
	city: string;
	countryCode: string;
	region: string;
};

export type Basics = {
	name: string;
	label: string;
	image: string;
	email: string;
	phone: string | null;
	url: string;
	summary: string[];
	description: string;
	theme?: string;
	location: Location;
	profiles: Profile[];
};

export type Highlight = {
	title: string;
	detail: string;
};

export type Education = {
	institution: string;
	url?: string;
	area: string;
	studyType: string;
	startDate: string;
	endDate: string | null;
	honors?: string | null;
	dim?: boolean;
};

export type Skill = {
	name: string;
	level: string;
	category?: string;
	keywords: string[];
	dim?: boolean;
};

export type Project = {
	name: string;
	isActive: boolean;
	year?: string;
	kind?: string;
	description: string;
	context?: string;
	challenges?: string;
	learnings?: string;
	skills?: string[];
	url?: string | null;
	github?: string | null;
	sample?: string | null;
	sampleType?: "file" | "url";
	sampleBackground?: string;
	hosting?: string[];
};

export type Work = {
	name: string;
	position: string;
	location?: string;
	url?: string | null;
	startDate: string;
	endDate: string | null;
	summary?: string;
	highlights?: string[] | null;
	responsibilities?: string[] | null;
	skills?: string[];
	dim?: boolean;
};

export type CV = {
	basics: Basics;
	highlights: Highlight[];
	education: Education[];
	"continuing-education"?: Education[];
	skills: Skill[];
	projects: Project[];
	work: Work[];
};

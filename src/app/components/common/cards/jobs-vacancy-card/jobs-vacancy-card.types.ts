export enum EJobType {
	'Full Time',
	'Part Time',
	'Remote',
	'Pay By Hour',
	'Project',
}

export type TJobsVacancy = {
	title: string;
	company: string;
	date: Date;
	type: EJobType;
	description: string;
	reviews: number;
	applicants: number;
	categories: Array<string>;
};

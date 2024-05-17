import { TJobsVacancy } from '../../common/cards/jobs-vacancy-card/jobs-vacancy-card.types';

export const data: Array<TJobsVacancy> = [
	{
		title: 'ABC',
		company: 'Company',
		type: 0,
		date: new Date('2001-02-02'),
		description: 'Description',
		reviews: 2,
		applicants: 5,
		categories: ['Category', 'Category', 'Category'],
	},
	{
		title: 'CDE',
		company: 'Company',
		type: 0,
		date: new Date('2002-02-02'),
		description: 'Description',
		reviews: 3,
		applicants: 5,
		categories: ['Category', 'Category', 'Category'],
	},
	{
		title: 'BCD',
		company: 'Company',
		type: 0,
		date: new Date('2000-02-02'),
		description: 'Description',
		reviews: 1,
		applicants: 5,
		categories: ['Category', 'Category', 'Category'],
	},
];

import { Vacancy } from '../../../models/vacancy';

export const data: Array<Vacancy> = [
	{
		id: 1,
		name: 'ABC',
		companyId: 1,
		companyName: 'Company',
		state: 0,
		openDate: new Date('2001-02-02'),
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto porro cum nisi ipsa magni numquam obcaecati assumenda aperiam inventore? Hic aut eveniet accusamus ea tenetur nesciunt commodi, exercitationem possimus rerum corporis, culpa, omnis saepe cupiditate.',
		reviewCount: 2,
		applicantCount: 5,
		categoryId: 1,
		categoryName: 'Technology',
	},
	{
		id: 1,
		name: 'CDE',
		companyId: 3,
		companyName: 'Company',
		state: 1,
		openDate: new Date('2002-02-02'),
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto porro cum nisi ipsa magni numquam obcaecati assumenda aperiam inventore? Hic aut eveniet accusamus ea tenetur nesciunt commodi, exercitationem possimus rerum corporis, culpa, omnis saepe cupiditate.',
		reviewCount: 3,
		applicantCount: 5,
		categoryId: 2,
		categoryName: 'Education',
	},
	{
		id: 3,
		name: 'BCD',
		companyId: 3,
		companyName: 'Company',
		state: 0,
		openDate: new Date('2000-02-02'),
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto porro cum nisi ipsa magni numquam obcaecati assumenda aperiam inventore? Hic aut eveniet accusamus ea tenetur nesciunt commodi, exercitationem possimus rerum corporis, culpa, omnis saepe cupiditate.',
		reviewCount: 1,
		applicantCount: 5,
		categoryId: 3,
		categoryName: 'Food',
	},
];

export class Vacancy {
	constructor(
		public id: number,
		public name: string,
		public openDate: Date,
		public state: number,
		public description: string,
		public applicantCount: number,
		public reviewCount: number,
		public categoryId: number,
		public categoryName: string,
		public companyId: number,
		public companyName: string
	) {}
}

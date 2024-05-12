import { active } from './active';
import { EOrderType } from '../sorting.types';

describe('active', () => {
	it('should return the data sorted from least active to most active', () => {
		const data = [
			{ reviews: 2, applicants: 5 },
			{ reviews: 3, applicants: 5 },
			{ reviews: 1, applicants: 5 },
		];
		const expected = [
			{ reviews: 1, applicants: 5 },
			{ reviews: 2, applicants: 5 },
			{ reviews: 3, applicants: 5 },
		];
		const result = active(data, EOrderType.ASC);
		expect(result).toEqual(expected);
	});

	it('should return the data sorted from most active to least active', () => {
		const data = [
			{ reviews: 2, applicants: 5 },
			{ reviews: 3, applicants: 5 },
			{ reviews: 1, applicants: 5 },
		];
		const expected = [
			{ reviews: 3, applicants: 5 },
			{ reviews: 2, applicants: 5 },
			{ reviews: 1, applicants: 5 },
		];
		const result = active(data, EOrderType.DESC);
		expect(result).toEqual(expected);
	});
});

import { companySize } from './company-size';
import { EOrderType } from '../sorting.types';

describe('companySize', () => {
	it('should return the data sorted from A to Z', () => {
		const data = [
			{ company: { size: 2 } },
			{ company: { size: 3 } },
			{ company: { size: 1 } },
		];
		const expected = [
			{ company: { size: 1 } },
			{ company: { size: 2 } },
			{ company: { size: 3 } },
		];
		const result = companySize(data, EOrderType.ASC);
		expect(result).toEqual(expected);
	});

	it('should return the data sorted from Z to A', () => {
		const data = [
			{ company: { size: 2 } },
			{ company: { size: 3 } },
			{ company: { size: 1 } },
		];
		const expected = [
			{ company: { size: 3 } },
			{ company: { size: 2 } },
			{ company: { size: 1 } },
		];
		const result = companySize(data, EOrderType.DESC);
		expect(result).toEqual(expected);
	});
});

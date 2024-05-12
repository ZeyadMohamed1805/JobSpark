import { active } from './active';
import { EOrderType } from '../sorting.types';

describe('active', () => {
	it('should return the data sorted from least reviewed to most reviewed', () => {
		const data = [{ reviews: 2 }, { reviews: 3 }, { reviews: 1 }];
		const expected = [{ reviews: 1 }, { reviews: 2 }, { reviews: 3 }];
		const result = active(data, EOrderType.ASC);
		expect(result).toEqual(expected);
	});

	it('should return the data sorted from most reviewed to least reviewed', () => {
		const data = [{ reviews: 2 }, { reviews: 3 }, { reviews: 1 }];
		const expected = [{ reviews: 3 }, { reviews: 2 }, { reviews: 1 }];
		const result = active(data, EOrderType.DESC);
		expect(result).toEqual(expected);
	});
});

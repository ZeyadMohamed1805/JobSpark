import { recent } from './recent';
import { EOrderType } from '../sorting.types';

describe('recent', () => {
	it('should return the data sorted from newest to oldest', () => {
		const data = [
			{ date: new Date('2001-02-02') },
			{ date: new Date('2002-02-02') },
			{ date: new Date('2000-02-02') },
		];
		const expected = [
			{ date: new Date('2002-02-02') },
			{ date: new Date('2001-02-02') },
			{ date: new Date('2000-02-02') },
		];
		const result = recent(data, EOrderType.ASC);
		expect(result).toEqual(expected);
	});

	it('should return the data sorted from oldest to newest', () => {
		const data = [
			{ date: new Date('2001-02-02') },
			{ date: new Date('2002-02-02') },
			{ date: new Date('2000-02-02') },
		];
		const expected = [
			{ date: new Date('2000-02-02') },
			{ date: new Date('2001-02-02') },
			{ date: new Date('2002-02-02') },
		];
		const result = recent(data, EOrderType.DESC);
		expect(result).toEqual(expected);
	});
});

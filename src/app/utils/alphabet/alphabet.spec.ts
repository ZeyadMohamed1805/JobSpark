import { alphabet } from './alphabet';
import { EOrderType } from './alphabet.types';

describe('alphabet', () => {
	it('should return the data sorted from A to Z', () => {
		const data = [{ name: 'Hamada' }, { name: 'Ahmed' }, { name: 'Zeyad' }];
		const expected = [
			{ name: 'Ahmed' },
			{ name: 'Hamada' },
			{ name: 'Zeyad' },
		];
		const result = alphabet(data, EOrderType.ASC);
		expect(result).toEqual(expected);
	});

	it('should return the data sorted from Z to A', () => {
		const data = [{ name: 'Hamada' }, { name: 'Ahmed' }, { name: 'Zeyad' }];
		const expected = [
			{ name: 'Zeyad' },
			{ name: 'Hamada' },
			{ name: 'Ahmed' },
		];
		const result = alphabet(data, EOrderType.DESC);
		expect(result).toEqual(expected);
	});
});

import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';
import { EOrderType } from '../../utils/alphabet/alphabet.types';

describe('OrderService', () => {
	let service: OrderService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(OrderService);
	});

	describe('alphabetically', () => {
		it('should return the data sorted from A to Z', () => {
			const data = [
				{ name: 'Hamada' },
				{ name: 'Ahmed' },
				{ name: 'Zeyad' },
			];
			const expected = [
				{ name: 'Ahmed' },
				{ name: 'Hamada' },
				{ name: 'Zeyad' },
			];
			const result = service.alphabetically(data, EOrderType.ASC);
			expect(result).toEqual(expected);
		});
	});
});

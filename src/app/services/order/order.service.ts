import { Injectable } from '@angular/core';
import { EOrderType } from '../../utils/alphabet/alphabet.types';
import { alphabet } from '../../utils/alphabet/alphabet';

@Injectable({
	providedIn: 'root',
})
export class OrderService {
	alphabetically(data: Array<any>, order: EOrderType) {
		return alphabet(data, order);
	}

	recent(data: Array<any>, order: EOrderType) {
		return data;
	}

	rate(data: Array<any>, order: EOrderType) {
		return data;
	}

	salary(data: Array<any>, order: EOrderType) {
		return data;
	}

	active<T>(data: Array<T>, order: EOrderType): Array<T> {
		return data;
	}
}

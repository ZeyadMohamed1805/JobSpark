import { Injectable } from '@angular/core';
import { EOrderType } from '../../utils/sorting/sorting.types';
import { alphabet } from '../../utils/sorting/alphabet/alphabet';
import { recent } from '../../utils/sorting/recent/recent';
import { active } from '../../utils/sorting/active/active';

@Injectable({
	providedIn: 'root',
})
export class OrderService {
	alphabetically(data: Array<any>, order: EOrderType) {
		return alphabet(data, order);
	}

	recent(data: Array<any>, order: EOrderType) {
		return recent(data, order);
	}

	active<T>(data: Array<T>, order: EOrderType): Array<T> {
		return active(data, order);
	}
}

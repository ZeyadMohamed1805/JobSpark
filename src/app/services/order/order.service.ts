import { Injectable } from '@angular/core';
import { EOrderType } from '../../utils/sorting/sorting.types';
import { alphabet } from '../../utils/sorting/alphabet/alphabet';
import { recent } from '../../utils/sorting/recent/recent';
import { active } from '../../utils/sorting/active/active';
import { companySize } from '../../utils/sorting/company-size/company-size';

@Injectable({
	providedIn: 'root',
})
export class OrderService {
	sort<T>(type: string, data: Array<T>, order: EOrderType): Array<T> {
		switch (type) {
			case 'most-recent':
				return this.byRecent(data, order);
			case 'most-active-reviewer':
				return this.byActive(data, order);
			default:
				return this.byAlphabet(data, order);
		}
	}

	byAlphabet<T>(data: Array<T>, order: EOrderType): Array<T> {
		return alphabet(data, order);
	}

	byRecent<T>(data: Array<T>, order: EOrderType): Array<T> {
		return recent(data, order);
	}

	byCompanySize<T>(data: Array<T>, order: EOrderType): Array<T> {
		return companySize(data, order);
	}

	byActive<T>(data: Array<T>, order: EOrderType): Array<T> {
		return active(data, order);
	}
}

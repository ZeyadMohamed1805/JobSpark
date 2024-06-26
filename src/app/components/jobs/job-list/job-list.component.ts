import { Component, OnInit } from '@angular/core';
import { JobsVacancyCardComponent } from '../../common/cards/jobs-vacancy-card/jobs-vacancy-card.component';
import { data } from './job-list.component.constants';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../services/order/order.service';
import { EOrderType } from '../../../utils/sorting/sorting.types';
import { Vacancy } from '../../../models/vacancy';

@Component({
	selector: 'app-job-list',
	standalone: true,
	imports: [JobsVacancyCardComponent],
	templateUrl: './job-list.component.html',
	styleUrl: './job-list.component.scss',
})
export class JobListComponent implements OnInit {
	vacancies: Array<Vacancy> = [];
	sortType: string = 'alphabetically';

	constructor(
		private activatedRoute: ActivatedRoute,
		private orderService: OrderService
	) {}

	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe((queryParams) => {
			this.sortType = queryParams['sort'];
			this.onSort();
		});
	}

	onSort(): void {
		this.vacancies = this.orderService.sort<Vacancy>(
			this.sortType,
			data,
			EOrderType.ASC
		);
	}
}

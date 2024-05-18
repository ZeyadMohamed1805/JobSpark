import { Component, OnInit } from '@angular/core';
import { JobsVacancyCardComponent } from '../../common/cards/jobs-vacancy-card/jobs-vacancy-card.component';
import { data } from './job-list.component.constants';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../services/order/order.service';
import { EOrderType } from '../../../utils/sorting/sorting.types';
import { Vacancy } from '../../../models/vacancy';
import { ApiService } from '../../../services/api/api.service';

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
	data:any=[];

	constructor(
		private activatedRoute: ActivatedRoute,
		private orderService: OrderService,
		private apiService:ApiService
	) {}

	ngOnInit(): void {
		this.fetchVacancies();
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

	fetchVacancies(): void {
		this.apiService.get<any>('api/Vacancy').subscribe(
		  (data) => {
			console.log(data.data);

		  },
		);
	  }
}

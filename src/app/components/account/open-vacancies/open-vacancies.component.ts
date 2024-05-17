import { Component, OnInit } from '@angular/core';
import { JobsVacancyCardComponent } from '../../common/cards/jobs-vacancy-card/jobs-vacancy-card.component';
import { data } from '../../jobs/job-list/job-list.component.constants';
import { Vacancy } from '../../../models/vacancy';
import { OrderService } from '../../../services/order/order.service';
import { EOrderType } from '../../../utils/sorting/sorting.types';

@Component({
	selector: 'app-open-vacancies',
	standalone: true,
	imports: [JobsVacancyCardComponent],
	templateUrl: './open-vacancies.component.html',
	styleUrl: './open-vacancies.component.scss',
})
export class OpenVacanciesComponent implements OnInit {
	vacancyData: Array<Vacancy> = [];

	constructor(private orderService: OrderService) {}

	ngOnInit(): void {
		this.vacancyData = this.orderService.byRecent(data, EOrderType.ASC);
	}
}

import { Component, Input, OnInit } from '@angular/core';
import { HomeVacancyCardComponent } from '../../common/cards/home-vacancy-card/home-vacancy-card.component';
import { TVacancy } from './vacancies.component.types';
import { TitleCasePipe } from '@angular/common';
import { cardsData } from './vacancies.component.constants';
import { THomeVacancyDTO } from '../../../types/dtos/home-vacany';
import { OrderService } from '../../../services/order/order.service';
import { EOrderType } from '../../../utils/sorting/sorting.types';

@Component({
	selector: 'app-vacancies',
	standalone: true,
	imports: [TitleCasePipe, HomeVacancyCardComponent],
	templateUrl: './vacancies.component.html',
	styleUrl: './vacancies.component.scss',
})
export class VacanciesComponent implements OnInit {
	@Input() data: TVacancy | null = null;
	cardsData: Array<THomeVacancyDTO> = [];

	constructor(private orderService: OrderService) {}

	ngOnInit(): void {
		if (this.data?.sortingType === 'most-recent') {
			this.cardsData = this.orderService.byRecent(
				cardsData,
				EOrderType.ASC
			);
		} else if (this.data?.sortingType === 'alphabetically') {
			this.cardsData = this.orderService.byAlphabet(
				cardsData,
				EOrderType.ASC
			);
		}
	}
}

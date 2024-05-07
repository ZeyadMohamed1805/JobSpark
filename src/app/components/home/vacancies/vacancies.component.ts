import { Component, Input } from '@angular/core';
import { HomeVacancyCardComponent } from '../../common/cards/home-vacancy-card/home-vacancy-card.component';
import { TVacancy } from './vacancies.component.types';
import { TitleCasePipe } from '@angular/common';
import { cardsData } from './vacancies.component.constants';
import { THomeVacancyCard } from '../../common/cards/home-vacancy-card/home-vacancy-card.types';

@Component({
	selector: 'app-vacancies',
	standalone: true,
	imports: [TitleCasePipe, HomeVacancyCardComponent],
	templateUrl: './vacancies.component.html',
	styleUrl: './vacancies.component.scss',
})
export class VacanciesComponent {
	@Input() data: TVacancy | null = null;
	cardsData: Array<THomeVacancyCard> = cardsData;
}
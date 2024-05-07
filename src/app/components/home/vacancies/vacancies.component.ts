import { Component } from '@angular/core';
import { HomeVacanyCardComponent } from '../../common/cards/home-vacany-card/home-vacany-card.component';

@Component({
	selector: 'app-vacancies',
	standalone: true,
	imports: [HomeVacanyCardComponent],
	templateUrl: './vacancies.component.html',
	styleUrl: './vacancies.component.scss',
})
export class VacanciesComponent {}

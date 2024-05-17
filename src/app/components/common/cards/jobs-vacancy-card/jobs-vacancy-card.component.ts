import { Component, Input } from '@angular/core';
import { TJobsVacancy } from './jobs-vacancy-card.types';
import { Vacancy } from '../../../../models/vacancy';

@Component({
	selector: 'app-jobs-vacancy-card',
	standalone: true,
	imports: [],
	templateUrl: './jobs-vacancy-card.component.html',
	styleUrl: './jobs-vacancy-card.component.scss',
})
export class JobsVacancyCardComponent {
	@Input() data: Vacancy | null = null;
}

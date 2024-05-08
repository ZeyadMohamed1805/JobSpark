import { Component, Input } from '@angular/core';
import { TJobsVacancy } from './jobs-vacancy-card.types';

@Component({
	selector: 'app-jobs-vacancy-card',
	standalone: true,
	imports: [],
	templateUrl: './jobs-vacancy-card.component.html',
	styleUrl: './jobs-vacancy-card.component.scss',
})
export class JobsVacancyCardComponent {
	@Input() data: TJobsVacancy | null = null;
}

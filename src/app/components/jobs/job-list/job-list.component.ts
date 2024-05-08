import { Component } from '@angular/core';
import { JobsVacancyCardComponent } from '../../common/cards/jobs-vacancy-card/jobs-vacancy-card.component';
import { TJobsVacancy } from '../../common/cards/jobs-vacancy-card/jobs-vacancy-card.types';
import { data } from './job-list.component.constants';

@Component({
	selector: 'app-job-list',
	standalone: true,
	imports: [JobsVacancyCardComponent],
	templateUrl: './job-list.component.html',
	styleUrl: './job-list.component.scss',
})
export class JobListComponent {
	vacancies: Array<TJobsVacancy> = data;
}

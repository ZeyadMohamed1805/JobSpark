import { Component } from '@angular/core';
import { JobsVacancyCardComponent } from '../../common/cards/jobs-vacancy-card/jobs-vacancy-card.component';
import { TJobsVacancy } from '../../common/cards/jobs-vacancy-card/jobs-vacancy-card.types';
import { data } from '../../jobs/job-list/job-list.component.constants';
import { Vacancy } from '../../../models/vacancy';

@Component({
	selector: 'app-open-vacancies',
	standalone: true,
	imports: [JobsVacancyCardComponent],
	templateUrl: './open-vacancies.component.html',
	styleUrl: './open-vacancies.component.scss',
})
export class OpenVacanciesComponent {
	vacancyData: Array<Vacancy> = data;
}

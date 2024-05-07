import { Component } from '@angular/core';
import { JobsVacanyCardComponent } from '../../common/cards/jobs-vacany-card/jobs-vacany-card.component';

@Component({
	selector: 'app-job-list',
	standalone: true,
	imports: [JobsVacanyCardComponent],
	templateUrl: './job-list.component.html',
	styleUrl: './job-list.component.scss',
})
export class JobListComponent {}

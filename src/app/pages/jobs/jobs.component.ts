import { Component } from '@angular/core';
import { FormComponent } from '../../components/jobs/form/form.component';
import { JobListComponent } from '../../components/jobs/job-list/job-list.component';

@Component({
	selector: 'app-jobs',
	standalone: true,
	imports: [FormComponent, JobListComponent],
	templateUrl: './jobs.component.html',
	styleUrl: './jobs.component.scss',
})
export class JobsComponent {}

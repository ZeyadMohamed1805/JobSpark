import { Component } from '@angular/core';
import { FormComponent } from '../../components/jobs/form/form.component';

@Component({
	selector: 'app-jobs',
	standalone: true,
	imports: [FormComponent],
	templateUrl: './jobs.component.html',
	styleUrl: './jobs.component.scss',
})
export class JobsComponent {}

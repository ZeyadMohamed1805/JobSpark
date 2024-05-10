import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VacancyFormComponent } from '../vacancy-form/vacancy-form.component';

@Component({
	selector: 'app-intro',
	standalone: true,
	imports: [],
	templateUrl: './intro.component.html',
	styleUrl: './intro.component.scss',
})
export class IntroComponent {
	constructor(private dialog: MatDialog) {}

	onPostJobClick(): void {
		this.dialog.open<VacancyFormComponent>(VacancyFormComponent);
	}
}

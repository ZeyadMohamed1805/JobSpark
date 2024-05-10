import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-form',
	standalone: true,
	imports: [],
	templateUrl: './form.component.html',
	styleUrl: './form.component.scss',
})
export class FormComponent {
	constructor(private dialog: MatDialog) {}

	onFilterOptionsClick(): void {}
}

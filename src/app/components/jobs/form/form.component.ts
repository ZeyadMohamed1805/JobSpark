import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OptionsComponent } from '../options/options.component';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-form',
	standalone: true,
	imports: [],
	templateUrl: './form.component.html',
	styleUrl: './form.component.scss',
})
export class FormComponent {
	sortType: string | null = null;

	constructor(private dialog: MatDialog) {}

	onFilterOptionsClick(event: any): void {
		event.preventDefault();
		this.dialog.open<OptionsComponent>(OptionsComponent);
	}

	onApplyClick(): void {
		this.dialog.closeAll();
	}
}

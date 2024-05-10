import { Component } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs';

@Component({
	selector: 'app-options',
	standalone: true,
	imports: [MatTabGroup, MatTab],
	templateUrl: './options.component.html',
	styleUrl: './options.component.scss',
})
export class OptionsComponent {}

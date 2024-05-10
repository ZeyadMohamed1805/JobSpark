import { Component } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { SortComponent } from '../sort/sort.component';

@Component({
	selector: 'app-options',
	standalone: true,
	imports: [MatTabGroup, MatTab, SortComponent],
	templateUrl: './options.component.html',
	styleUrl: './options.component.scss',
})
export class OptionsComponent {}

import { Component } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { SortComponent } from '../sort/sort.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
	selector: 'app-options',
	standalone: true,
	imports: [MatTabGroup, MatTab, SortComponent, FilterComponent],
	templateUrl: './options.component.html',
	styleUrl: './options.component.scss',
})
export class OptionsComponent {}

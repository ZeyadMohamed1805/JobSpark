import { Component } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { SortComponent } from '../sort/sort.component';
import { FilterComponent } from '../filter/filter.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-options',
	standalone: true,
	imports: [MatTabGroup, MatTab, SortComponent, FilterComponent],
	templateUrl: './options.component.html',
	styleUrl: './options.component.scss',
})
export class OptionsComponent {
	sortingChoice: string;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {
		this.sortingChoice =
			this.activatedRoute.snapshot.queryParams['sort'] ||
			'Alphabetically';
	}

	onSortChange(value: string) {
		this.sortingChoice = value;
	}

	onApplyClick(event: any): void {
		event.preventDefault();
		this.router.navigateByUrl(`jobs?sort=${this.sortingChoice}`);
	}
}

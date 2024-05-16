import { Component, EventEmitter, Output } from '@angular/core';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';

@Component({
	selector: 'app-sort',
	standalone: true,
	imports: [MatRadioGroup, MatRadioButton],
	templateUrl: './sort.component.html',
	styleUrl: './sort.component.scss',
})
export class SortComponent {
	@Output() sendSort = new EventEmitter<string>();

	onRadioButtonChange(value: string) {
		this.sendSort.emit(value);
	}
}

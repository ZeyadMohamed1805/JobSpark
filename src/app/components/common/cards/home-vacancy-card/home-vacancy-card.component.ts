import { Component, Input } from '@angular/core';
import { THomeVacancyCard } from './home-vacancy-card.types';

@Component({
	selector: 'app-home-vacancy-card',
	standalone: true,
	imports: [],
	templateUrl: './home-vacancy-card.component.html',
	styleUrl: './home-vacancy-card.component.scss',
})
export class HomeVacancyCardComponent {
	@Input() data: THomeVacancyCard | null = null;
}

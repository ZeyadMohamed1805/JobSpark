import { Component, Input } from '@angular/core';
import { THomeVacancyDTO } from '../../../../types/dtos/home-vacany';

@Component({
	selector: 'app-home-vacancy-card',
	standalone: true,
	imports: [],
	templateUrl: './home-vacancy-card.component.html',
	styleUrl: './home-vacancy-card.component.scss',
})
export class HomeVacancyCardComponent {
	@Input() data: THomeVacancyDTO | null = null;
}

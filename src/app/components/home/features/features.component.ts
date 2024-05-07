import { Component } from '@angular/core';
import { FeaturesCardsComponent } from '../../common/cards/features-cards/features-cards.component';
import { card } from './feature.type';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-features',
	standalone: true,
	imports: [FeaturesCardsComponent, CommonModule],
	templateUrl: './features.component.html',
	styleUrl: './features.component.scss',
})
export class FeaturesComponent {
	cards: card[] = [
		{ title: 'Companies', number: 500 },
		{ title: 'Job Seekers', number: 10000 },
		{ title: 'Reviewed CVs', number: 3200 },
		{ title: 'Positions Landed', number: 1250 },
	];
}

import { Component, Input } from '@angular/core';
import { TFeatureCard } from '../../../home/features/features.component.types';

@Component({
	selector: 'app-features-cards',
	standalone: true,
	imports: [],
	templateUrl: './features-cards.component.html',
	styleUrl: './features-cards.component.scss',
})
export class FeaturesCardsComponent {
	@Input() data: TFeatureCard | null = null;
}

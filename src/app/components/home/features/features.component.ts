import { Component } from '@angular/core';
import { FeaturesCardsComponent } from '../../common/cards/features-cards/features-cards.component';
import { TFeatureCard } from './features.component.types';
import { featureCards } from './features.component.constants';

@Component({
	selector: 'app-features',
	standalone: true,
	imports: [FeaturesCardsComponent],
	templateUrl: './features.component.html',
	styleUrl: './features.component.scss',
})
export class FeaturesComponent {
	featureCards: Array<TFeatureCard> = featureCards;
}

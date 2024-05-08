import { Component, Input, input } from '@angular/core';
import { card } from '../../../home/features/feature.type';

@Component({
	selector: 'app-features-cards',
	standalone: true,
	imports: [],
	templateUrl: './features-cards.component.html',
	styleUrl: './features-cards.component.scss',
})
export class FeaturesCardsComponent {
	@Input() c: card = { title: ' ', number: 0 };
}

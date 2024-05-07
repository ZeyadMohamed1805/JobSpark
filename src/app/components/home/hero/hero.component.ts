import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-hero',
	standalone: true,
	imports: [TitleCasePipe],
	templateUrl: './hero.component.html',
	styleUrl: './hero.component.scss',
})
export class HeroComponent {}

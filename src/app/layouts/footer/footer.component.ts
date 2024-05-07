import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [RouterLink, TitleCasePipe],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	navLinks: Array<string> = ['home', 'jobs', 'guideline'];
	navButtons: Array<string> = ['login', 'register'];
}

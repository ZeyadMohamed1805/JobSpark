import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [TitleCasePipe],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	navLinks: Array<string> = ['home', 'jobs', 'guidelines'];
	navButtons: Array<string> = ['login', 'register'];
}

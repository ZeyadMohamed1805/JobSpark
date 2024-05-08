import { Component } from '@angular/core';
import { IntroComponent } from '../../components/account/intro/intro.component';

@Component({
	selector: 'app-account',
	standalone: true,
	imports: [IntroComponent],
	templateUrl: './account.component.html',
	styleUrl: './account.component.scss',
})
export class AccountComponent {}

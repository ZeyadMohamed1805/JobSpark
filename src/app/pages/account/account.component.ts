import { Component } from '@angular/core';
import { IntroComponent } from '../../components/account/intro/intro.component';
import { ProfileComponent } from '../../components/account/profile/profile.component';
import { ContactComponent } from '../../components/account/contact/contact.component';

@Component({
	selector: 'app-account',
	standalone: true,
	imports: [IntroComponent, ProfileComponent, ContactComponent],
	templateUrl: './account.component.html',
	styleUrl: './account.component.scss',
})
export class AccountComponent {}

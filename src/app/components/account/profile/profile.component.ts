import { Component } from '@angular/core';
import { TProfileData } from './profile.component.types';
import { profileData } from './profile.component.constants';

@Component({
	selector: 'app-profile',
	standalone: true,
	imports: [],
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.scss',
})
export class ProfileComponent {
	profileData: Array<TProfileData> = profileData;
}

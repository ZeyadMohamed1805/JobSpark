import { Component } from '@angular/core';
import { TContactData } from './contact.component.types';
import { contactData } from './contact.component.constants';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
})
export class ContactComponent {
	contactData: Array<TContactData> = contactData;
}

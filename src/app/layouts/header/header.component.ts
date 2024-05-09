import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { navLinks, navButtons } from './header.component.constants';
import {MatDialog} from '@angular/material/dialog'

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [TitleCasePipe],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	constructor(public dialog: MatDialog){}
	navLinks: Array<string> = navLinks;
	navButtons: Array<string> = navButtons;
}

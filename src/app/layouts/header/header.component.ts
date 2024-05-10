import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { navLinks, navButtons } from './header.component.constants';
import {MatDialog} from '@angular/material/dialog'
import { RegisterComponent } from '../../components/auth/register/register.component';
import { LoginComponent } from '../../components/auth/login/login.component';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [TitleCasePipe],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	constructor(public dialog: MatDialog){}
	
	openDialog(index: number): void {
		const dialogRef = this.dialog.open<RegisterComponent | LoginComponent>(
		  index ? RegisterComponent : LoginComponent
		);
	}	

	navLinks: Array<string> = navLinks;
	navButtons: Array<string> = navButtons;
}

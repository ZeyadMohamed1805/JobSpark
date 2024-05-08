import { Component } from '@angular/core';
import { skillsData } from './skills.component.constants';

@Component({
	selector: 'app-skills',
	standalone: true,
	imports: [],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.scss',
})
export class SkillsComponent {
	skillsData: Array<string> = skillsData;
}

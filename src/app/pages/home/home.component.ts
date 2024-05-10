import { Component } from '@angular/core';
import { FeaturesComponent } from '../../components/home/features/features.component';
import { BrowseNowComponent } from '../../components/home/browse-now/browse-now.component';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { VacanciesComponent } from '../../components/home/vacancies/vacancies.component';
import { vacancyData } from './home.component.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturesComponent,BrowseNowComponent, HeroComponent, VacanciesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  
	vacancyData = vacancyData;
}

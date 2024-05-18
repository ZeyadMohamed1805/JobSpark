import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HomeVacancyCardComponent } from '../../common/cards/home-vacancy-card/home-vacancy-card.component';
import { TVacancy } from './vacancies.component.types';
import { TitleCasePipe } from '@angular/common';
import { cardsData } from './vacancies.component.constants';
import { THomeVacancyDTO } from '../../../types/dtos/home-vacany';
import { OrderService } from '../../../services/order/order.service';
import { EOrderType } from '../../../utils/sorting/sorting.types';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [CommonModule, TitleCasePipe, HomeVacancyCardComponent],
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss'],
})
export class VacanciesComponent implements OnInit {
  @Input() data: TVacancy | null = null;
  cardsData: Array<THomeVacancyDTO> = [];

  constructor(private orderService: OrderService, private apiService: ApiService) {}

  ngOnInit(): void {


    // Fetch data from API
    this.fetchVacancies();
  }

  fetchVacancies(): void {
    this.apiService.get<any>('api/Vacancy').subscribe(
      (data) => {

      //  this.cardsData = data;
	  if (this.data?.sortingType === 'most-recent') {
		this.cardsData = this.orderService.byRecent(data.data, EOrderType.ASC);
	  } else if (this.data?.sortingType === 'alphabetically') {
		this.cardsData = this.orderService.byAlphabet(data.data, EOrderType.ASC);
	  }


      },
      (error) => {
        console.error('Error fetching vacancies:', error);
      }
    );
  }


}

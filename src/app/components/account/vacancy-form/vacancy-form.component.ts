import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vacancy-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './vacancy-form.component.html',
  styleUrl: './vacancy-form.component.scss'
})
export class VacancyFormComponent {
  job = {
    companyName: '',
    title: '',
    time: 'Full time',
    description: '',
    category:''
  };

  submitForm() {
    console.log('Form submitted:', this.job);
  }

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vacancy-form',
  standalone: true,
  imports: [FormsModule],
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
    // Here you can send the form data to your backend or perform any other action
  }

}

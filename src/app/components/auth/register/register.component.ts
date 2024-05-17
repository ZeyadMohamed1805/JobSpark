import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
     name:string="";
     password:string="";
     email:string="";
     SelectRole :string = "Applicant";

     onSubmit(registerForm:NgForm)
     {console.log('registerForm',registerForm.valid,registerForm.value)}
}

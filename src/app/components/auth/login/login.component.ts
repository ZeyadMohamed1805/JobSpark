import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email:string = "";
  password:string = "";
  

  constructor() {
    this.email = '';
    this.password = '';
  }

  onSubmit(loginForm:NgForm)
  {console.log('loginForm',loginForm.valid,loginForm.value)}
}

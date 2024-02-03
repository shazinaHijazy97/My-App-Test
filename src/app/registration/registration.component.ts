import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  firstName = new FormControl(' ')
  lastName = new FormControl(' ')
  contactNumber = new FormControl(' ')
  emailAddress = new FormControl(' ')
  password = new FormControl(' ')
  confirmPassword = new FormControl(' ')

  createAccount = new FormGroup({
    firstName: new FormControl(' ',Validators.required),
  lastName: new FormControl(' '),
  contactNumber: new FormControl(' '),
  emailAddress:  new FormControl(' '),
  password: new FormControl(' '),
  confirmPassword: new FormControl(' ')
   
  });
  

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.createAccount.value);
  }
  
  
  
  // firstName = new FormControl(' ')
  // lastName = new FormControl(' ')
  // contactNumber = new FormControl(' ')
  // emailAddress = new FormControl(' ')
  // password = new FormControl(' ')
  // confirmPassword = new FormControl(' ')

  // updateName() {
  //   this.firstName.setValue('Nancy');
  // }

}

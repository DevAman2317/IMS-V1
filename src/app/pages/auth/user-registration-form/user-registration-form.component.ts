import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent {
  registrationForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    contact: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    qualification: new FormControl('', Validators.required),
    percentageLastExam: new FormControl('', Validators.required),
    caste_category: new FormControl('', Validators.required),
    subcaste: new FormControl('', Validators.required),
  });
}




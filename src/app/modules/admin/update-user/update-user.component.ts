import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    // Add more form controls as needed
  });
  constructor(private active:ActivatedRoute){
    
  }
  onInIt(){
    this.active.params.subscribe((Userdata)=>console.log(Userdata['id']))
    this.updateForm()
  }

  updateForm(){
    console.log(this.userForm.value)
  }

}

import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  // username: any = 'suraj@gmail.com';
  // password: any = 'password12';

  constructor() {
    localStorage.setItem('isloged','false');
  }
 



  
  login(userId:any,password:any){
    userId=this.loginForm.value.email;
    password=this.loginForm.value.password;
    if(userId=="suraj@gmail.com" && password==`password12`){
      localStorage.setItem('isloged','true')
    }else{
      localStorage.setItem('isloged','false')
      
    }
  }
 
}
 

  


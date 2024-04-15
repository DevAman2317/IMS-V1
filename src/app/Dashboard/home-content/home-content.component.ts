import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    localStorage.setItem('isloged','false');
  }
 

  private loggedInUser: any; // You can replace any with your user model

  

  logins(username: any, password: any): boolean {
    // Here you would typically make an HTTP request to your backend to validate the credentials
    // For demonstration purposes, let's assume the credentials are hardcoded
    if (this.loginForm.value.email == 'admin' && this.loginForm.value.password == 'admin') {
      this.loggedInUser = { username: 'admin' }; // Assuming admin
      this.router.navigate(['/admin']);
      return true;
      
    } else if (username == 'user' && password == 'user') {
      this.loggedInUser = { username: 'user' }; // Assuming user
      this.router.navigate(['/user']);

      return true;
    } else {
      return false;
    }
  }



  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  isAdmin(): boolean {
    return this.loggedInUser && this.loggedInUser.username === 'admin';
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
 

  


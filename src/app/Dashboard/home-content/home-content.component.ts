import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/myServices/auth/login.service';

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

  constructor(private router: Router, private service:LoginService) {
    localStorage.setItem('isloged','false');
  }
 

  // private loggedInUser: any; // You can replace any with your user model

  

  // logins(username: any, password: any): boolean {
  //   // Here you would typically make an HTTP request to your backend to validate the credentials
  //   // For demonstration purposes, let's assume the credentials are hardcoded
  //   if (this.loginForm.value.email == 'admin' && this.loginForm.value.password == 'admin') {
  //     this.loggedInUser = { username: 'admin' }; // Assuming admin
  //     this.router.navigate(['/admin']);
  //     return true;
      
  //   } else if (username == 'user' && password == 'user') {
  //     this.loggedInUser = { username: 'user' }; // Assuming user
  //     this.router.navigate(['/user']);

  //     return true;
  //   } else {
  //     return false;
  //   }
  // }



  // isLoggedIn(): boolean {
  //   return this.loggedInUser !== null;
  // }

 




  
  // login(userId:any,password:any){
  //   userId=this.loginForm.value.email;
  //   password=this.loginForm.value.password;
  //   if(userId=="suraj@gmail.com" && password==`password12`){
  //     localStorage.setItem('isloged','true')
  //   }else{
  //     localStorage.setItem('isloged','false')
  //   }
  // }
 
loginsir(){
  if(this.loginForm.valid){

    this.service.loginService(this.loginForm.value).subscribe
    ((result:any)=>
      {
        const token=this.service.setToken(result.token,result.role_id)
        console.log("this is token data",token)
        console.log(result);
        this.service.getUserRoleById(result.role_id).subscribe((rol:any)=>{
          console.log(rol[0].role_name);
           if(token==true && rol[0].role_name == "ADMIN"){
          this.router.navigate(['/admin'])
        }else if(token==true && rol[0].role_name == "STUDENT"){
          this.router.navigate(['/user'])
        }else if(token==true && rol[0].role_name == "TEACHER"){
          this.router.navigate(['/user'])
        }else {
          alert(result);
        }
        })
       



        // if(result.role_id==3 ){
        //   this.router.navigate(['/admin']); 
        //   // localStorage.setItem('authToken',`${result.token}`)
        // }else if(result.role_id==2){
        //   this.router.navigate(['/user'])
        //   localStorage.setItem('authToken',`${result.token}`);

        // }else{
        //   alert(result)
        // }
      })
    
  }

}


}
 

  


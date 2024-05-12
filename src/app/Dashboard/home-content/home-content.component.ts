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


  constructor(private router: Router, private service:LoginService) {
  }
 





 




  
 
  loginsir(){

  if(this.loginForm.valid){

    this.service.loginService(this.loginForm.value).subscribe
    ((result:any)=>
      {
        const token=this.service.setToken(result.token,result.role_id)
        console.log("this is token data",token)

        // console.log(result);

        this.service.getUserRoleById(result.role_id).subscribe((rol:any)=>{
          console.log(rol[0].role_name);
           if(token==true && rol[0].role_name == "ADMIN"){
          this.router.navigate(['/admin'])
         return localStorage.setItem('isLoged','true');

        }else if(token==true && rol[0].role_name == "STUDENT"){
          this.router.navigate(['/user'])
         return localStorage.setItem('isLoged','true');

        }else if(token==true && rol[0].role_name == "TEACHER"){
          this.router.navigate(['/user'])
          return localStorage.setItem('isLoged','true');

        }else {
          alert(result);
          console.log(result.massage);
        }
      })
      })
    
  }else{
    alert("User Not Found Enter Valid UserName Password");
      this.router.navigate([' '])
  }

}



}
 

  


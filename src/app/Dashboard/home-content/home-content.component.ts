import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  registrationForm = new FormGroup({

  })

  constructor(private router: Router, private service: LoginService) {
    // this.loginsir()
    this.directLogin()
  }





  loginsir() {

    if (this.loginForm.valid) {

      this.service.loginService(this.loginForm.value).subscribe((result: any) => {
          console.log(result)
          console.log(result.user_id)


          
          //getting role name 
          this.service.getUserRoleById(result.role_id).subscribe((rol: any) => {

            // and set it in local storage given below
            let token = this.service.setToken(result.token, rol[0].role_name,result.user_id)
            
            //setToken method returns true if it got the token and rol_name successfully
            // now if condition find both things it will rout to the dashboard as per user role.
            if (token == true && rol[0].role_name == "ADMIN") {

              this.router.navigate(['/admin'])

              return localStorage.setItem('isLoged', 'true');
              //added isLoged value to the local storage used in directlogin method
            }

            else if (token == true && rol[0].role_name == "STUDENT") {
              this.router.navigate(['/user'])
              return localStorage.setItem('isLoged', 'true');

            }

            else if (token == true && rol[0].role_name == "TEACHER") {
              this.router.navigate(['/user'])
              return localStorage.setItem('isLoged', 'true');

            }

            else {
              // alert(result);
              // console.log(result.error);
            }
          })
        })

    } else {
      // alert("User Not Found Enter Valid UserName Password");
      this.service.loginService(this.loginForm.value).subscribe((res: any) => {
      

      })
    }


    
    
  }
 

  



  directLogin() {
    const token = localStorage.getItem('isLoged');
    const roleName = localStorage.getItem('userRole');

    console.log(token, roleName, "are the value getting")

    if (token && roleName == 'ADMIN') {
      window.location.href = '/admin'
    } else if (token && roleName == 'STUDENT') {
      window.location.href = '/user'
    }


  }

}





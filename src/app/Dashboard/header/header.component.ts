import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/myServices/auth/login.service';
import { GetAllRolesService } from 'src/app/core/myServices/roles/getRoles/get-all-roles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router ,  private ser:LoginService,private userService:GetAllRolesService){
    console.log(this.proImg,"is the local value")
    
  }

  userName:any
  proImg:any = false;

  ngDoCheck(): void {
    // Retrieve the value of 'isLoggedIn' from local storage
    const isLoggedInString = localStorage.getItem('isLoged');
    this.proImg=isLoggedInString;
    
  }


  

signout(){
  // const token=localStorage.getItem('authToken')
  localStorage.clear(); 
  this.router.navigate(['home']);
  this.proImg='false'
}




}

import { Component } from '@angular/core';
import { GetAllRolesService } from 'src/app/core/myServices/roles/getRoles/get-all-roles.service';
import { GetAllUsersService } from 'src/app/core/myServices/user/getUsers/get-all-users.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent {
constructor(private userService:GetAllUsersService){

  this.getAdmin()
}
ngOnInIt(){
}
searchQuery=''
userData:any;
getAdmin(){
  this.userService.getallAdmin().subscribe((res:any)=>{
    console.log(res)
    this.userData=res.body
  })
}


}

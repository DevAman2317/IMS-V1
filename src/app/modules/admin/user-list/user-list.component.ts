import { Component } from '@angular/core';
import { GetAllUsersService } from 'src/app/MyServices/get-all-users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  UserData:any
      constructor(private getUsers:GetAllUsersService){
        this.getUser()
      }

      getUser(){
        this.getUsers.getAllUsers().subscribe((res:any)=>{
          this.UserData = res.body
          console.log(this.UserData)
          // console.log(this.Userdata)
        })
      }
}

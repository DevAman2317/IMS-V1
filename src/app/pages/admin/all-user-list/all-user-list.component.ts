import { Component } from '@angular/core';
import { GetAllUsersService } from 'src/app/core/myServices/user/getUsers/get-all-users.service';
import { FilterPipe } from 'src/app/shared/pipe/filter.pipe';


@Component({
  selector: 'app-all-user-list',
  templateUrl: './all-user-list.component.html',
  styleUrls: ['./all-user-list.component.css']
})
export class AllUserListComponent {

  constructor(private getUsers:GetAllUsersService){
        
    this.getUser()
  }
  
  UserData:any;
  searchQuery:any='';
  
      



  getUser(){
    this.getUsers.getAllUsers().subscribe((res:any)=>{
      this.UserData = res.body;
      // console.log(this.UserData)
      
      // console.log(this.Userdata)
      
    })
  }

  filterUsers() {
    this.filterUsers = this.UserData.filter(()=>
      this.UserData.user_name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }






}

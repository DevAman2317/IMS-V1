import { Component } from '@angular/core';
import { GetAllUsersService } from 'src/app/core/myServices/user/getUsers/get-all-users.service';
import { FilterPipe } from 'src/app/shared/pipe/filter.pipe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  UserData:any;
   data:any=this.getUsers.searchQuery='';
  userRoles:any;
  selectedRoleId: any;
      

  constructor(private getUsers:GetAllUsersService){
        
    this.getUserRole()
  }

      // deleteUser(id:number){
      //   this.getUsers.deleteUser(id).subscribe((res:any)=>{console.log(res)

          
      // Swal.fire({
      //   title: "Are you sure?",
      //   text: "You won't be able to revert this!",
      //   icon: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#3085d6",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Yes, delete it!"
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     Swal.fire({
      //       title: "Deleted!",
      //       text: `${res.message}`,
      //       icon: "success"
            
      //     });
      //     location.reload();
         
      //   }
      // });
      //   })
        
      // }

      


      getUserRole(){
        this.getUsers.getAllUsersRole().subscribe((res:any)=>{
          // console.log(res);
          this.userRoles=res
          
        })

      }



    



}

import { Component } from '@angular/core';
import { GetAllUsersService } from 'src/app/core/myServices/user/getUsers/get-all-users.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
constructor(private service:GetAllUsersService){
  this.getStudent()
}
searchQuery:any;
studentData:any;
getStudent(){
  this.service.getAllStudents().subscribe((res:any)=>{ console.log(res)
    this.studentData=res.body 
  })
}
}

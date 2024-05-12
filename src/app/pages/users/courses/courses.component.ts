import { Component } from '@angular/core';
import { CoursesService } from 'src/app/core/myServices/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
constructor(private courseService:CoursesService){
  this.getcourses()
}
response:any
getcourses(){
  this.courseService.getAllCourses().subscribe((res:any)=>{console.log(res)
    this.response=res.body
    
  })
}



}

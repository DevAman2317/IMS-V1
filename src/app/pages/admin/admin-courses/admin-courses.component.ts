import { Component } from '@angular/core';
import { CoursesService } from 'src/app/core/myServices/courses/courses.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent {
  constructor(private courses:CoursesService){
    this.getCourses()
    

  }
 
  addCourseForm=new FormGroup({
    course_name:new FormControl('',[Validators.required]),
    course_duration:new FormControl('',[Validators.required]),
    course_fees: new FormControl('',[Validators.required])
  })
 

  updateForm=new FormGroup({
    course_name:new FormControl('',[Validators.required]),
    course_duration:new FormControl('',[Validators.required]),
    course_fees: new FormControl('',[Validators.required])
  })


  coursesData:any;
 
  getCourses(){
    this.courses.getAllCourses().subscribe((res:any)=>{
      console.log(res);
      this.coursesData=res.body
      
      console.log("this is coursesData",this.coursesData)
    })

   }

   id:any;
   getCourseId(courseId:any){
    console.log(courseId,'--------------loij----------')
    this.id=courseId
   }

   getCourseById(){
    this.getCourseId(this.id)
    this.courses.getCourseById(this.id).subscribe((res:any)=>{
      console.log(res,'this is by id res');
      this.updateForm.patchValue(res.body)
    })
   }

   updateCourse(){
    this.courses.updateCourses(this.id,this.updateForm.value).subscribe((res)=>{
      console.log(res);
      Swal.fire({
        title: "Success!",
        text: "Course Updated Successfully",
        icon: "success",
        timer: 2000
        
      });
      setTimeout(() => {
        location.reload()
        
      }, 1000);
    })
   }

   addCourse(){
    this.courses.createCourse(this.addCourseForm.value).subscribe((res:any)=>{console.log(res.message)
      
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${this.addCourseForm.value.course_name} has Added`,
        showConfirmButton: false,
        timer: 2000
      });
      location.reload()
    })
      
  }

  resetForm(){
    this.addCourseForm.reset()
  }
 
  delete(course_id:any){
    this.courses.deleteUCourse(course_id).subscribe((res:any)=>{console.log
      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: `${res.message}`,
            icon: "success"
            
          });
          location.reload();
         
        }
      });
    })
  }





}

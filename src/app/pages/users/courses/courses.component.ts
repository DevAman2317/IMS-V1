import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoursesService } from 'src/app/core/myServices/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {


constructor(private courseService:CoursesService){
  this.getcourses()
  // this.courseService.enrolment().subscribe((res)=>console.log(res))
  
}



response:any
getcourses(){
  this.courseService.getAllCourses().subscribe((res:any)=>{
    this.response=res.body
    // console.log(this.response)
  })
}


byCourse= new FormGroup({
  course_name:new FormControl(''), 
  total_fees:new FormControl(''),
  balance_fees:new FormControl(''),
  paid_fees:new FormControl(''),
  amount:new FormControl(''),
  transaction_id:new FormControl(''),
  course_id:new FormControl('',),
  revenue_category_id:new FormControl('')

  

})

id:any

patchValue(courseName:any, courseFess:any,course_id:any){
  this.byCourse.patchValue({
   course_name: courseName,
    total_fees:courseFess,
    course_id:course_id,
    
    
  });
  let id=this.courseService.getUserIdfromLocal()
  this.id=id;
  console.log(this.id,'this is id=============')
}
paidFees(){
  let byCourseObj = {
    'user_id': this.id,
    'course_id':this.byCourse.value.course_id,
  }
  
  this.courseService.paidfees(this.byCourse.value).subscribe((res:any)=>{
    console.log(res.message);
    console.log(byCourseObj.user_id)
    if(res.message=='INCOME_DETAILS_IS_ADDED_SUCCESSFULLY'){
     
      //get inrollment data 
      //if have enrolled not need to call enrolled api
      //else call enrolled api 
      console.log('got response successfully')
      console.log(byCourseObj)
     
      console.log(byCourseObj);
      this.courseService.enrolment(byCourseObj).subscribe((res:any)=>{
          console.log('===========================',res);
          alert(res.message)
           
          this.courseService.userHasEnrolled(this.id,{"course_id":this.byCourse.value.course_id}).subscribe((res:any)=>{
            console.log(res, 'has inrolled respons')
            // console.log(byCourseObj,'by course object')
          })
          //get role from local storage.
          //if roll==4 call api for update role as : 3
          //else not need to call update role api
        })
        
        
    }else{
      console.log('error occures')
    }
  })
}







}
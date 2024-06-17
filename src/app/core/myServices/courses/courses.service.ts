import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { 
    // this.getAllCourses

//     this.enrolment(c).subscribe((res)=>console.log(res))
  }
  

getAllCourses():Observable<any>{
  return this.http.get('https://developerschool-backend.onrender.com/api/v1/course2/get')
}

createCourse(body:any){
  return this.http.post('https://developerschool-backend.onrender.com/api/v1/course2/post',body)
}


deleteUCourse(id:number){
  return this.http.delete(`https://developerschool-backend.onrender.com/api/v1/course2/delete/${id}`)
}

getCourseById(id:number){
  return this.http.get(`https://developerschool-backend.onrender.com/api/v1/course2/getById/${id}`)
}

updateCourses(id:number,body:any){
  return this.http.put(`https://developerschool-backend.onrener.com/api/v1/course2/update/${id}`,body)
}

paidfees(body:any){
  return this.http.post(`https://developerschool-backend.onrender.com/api/v1/revenue/addIncome`,body)
}


getUserIdfromLocal(){
  return localStorage.getItem('userId')
}
// cheked if user inrolled alread or not
userHasEnrolled(userid:any,body:any){
  return this.http.get(`https://developerschool-backend.onrender.com/api/v1/enrollment/getEnrolledCoursesByStudentId/${userid}`,body);
  console.log(body);
  
}


enrolment(body:any){
  return this.http.post(`https://developerschool-backend.onrender.com/api/v1/enrollment/post`,body)
}









}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { 
    this.getAllCourses
  }
  

getAllCourses(){
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
  return this.http.put(`https://developerschool-backend.onrender.com/api/v1/course2/update/${id}`,body)
}



}

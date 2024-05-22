import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constantAPI } from 'src/app/core/constant/constantAPI';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {

  constructor(private http:HttpClient) { 
    
  }
  searchQuery:any='';

   UserName:any
  

  getAllUsers(){
    return this.http.get(`${constantAPI.Endpoint.allUsers}v1/users`)
  }
  getUserById(id:any){
    return this.http.get(`${constantAPI.Endpoint.allUsers}/v1/users/${id}`)
  }
  // deleteUser(id:number){
  //   return this.http.delete(`${constantAPI.Endpoint.allUsers}/v1`)
  // }
  // updateUser(){
  //   return this.http.
  // }

  getAllUsersRole(){
    return this.http.get(`https://developerschool-backend.onrender.com/api/v1/urole/getAllRoles`)
  }

  getUserRoleById(id:number){
    return this.http.get(`https://developerschool-backend.onrender.com/api/v1/urole/${id}`)
  }

  getallAdmin(){
    return this.http.get(`https://developerschool-backend.onrender.com/api/v1/admin`)
  }

  getAllStudents(){
    return this.http.get('https://developerschool-backend.onrender.com/api/v1/students')
  }





  getAdmin(){

  }

  getStudent(){

  }
  getTeacher(){

  }
  getGuest(){

  }

}

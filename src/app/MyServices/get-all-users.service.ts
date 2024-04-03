import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {

  constructor(private http:HttpClient) { 
    this.getAllUsers()
  }

   baseUrl=`https://developerschool-backend.onrender.com/api/`
  

  getAllUsers(){
    return this.http.get(`${this.baseUrl}v1/users`)
  }
  // updateUser(){
  //   return this.http.
  // }

}

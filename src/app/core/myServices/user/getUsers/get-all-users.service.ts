import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constantAPI } from 'src/app/core/constant/constantAPI';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {

  constructor(private http:HttpClient) { 
    this.getAllUsers()
  }

   
  

  getAllUsers(){
    return this.http.get(`${constantAPI.Endpoint.allUsers}v1/users`)
  }
  // updateUser(){
  //   return this.http.
  // }

}

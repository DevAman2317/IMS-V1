import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  
baseUrl=`https://developerschool-backend.onrender.com/`

  constructor(private http:HttpClient) { }

  loginService(body:any){
    return this.http.post(`${this.baseUrl}api/v1/urole/userlogin/`,body);

  }
  setToken(token:any, userRole:any){
    localStorage.setItem('authToken',token); 
    localStorage.setItem('userRole',userRole);
    return true;
  }
  getToken(){
    localStorage.getItem('authToken');
    return true;
  }
 getUserRoleById(id:number){
  return this.http.get(`${this.baseUrl}api/v1/urole/${id}`)
 }

  
}

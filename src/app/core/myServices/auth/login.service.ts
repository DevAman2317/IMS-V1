import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  
baseUrl=`https://developerschool-backend.onrender.com/`

  constructor(private http:HttpClient) { }

  loginService(body:any){
    return this.http.post(`${this.baseUrl}api/v1/urole/userlogin/`,body)
  }
}

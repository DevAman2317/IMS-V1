import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constantAPI } from '../../constant/constantAPI';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  constructor(private http:HttpClient) { }



getAllRevenue(){
 return this.http.get(`https://developerschool-backend.onrender.com/api/v1/revenue/getAllrevenueCategory`)
}

}

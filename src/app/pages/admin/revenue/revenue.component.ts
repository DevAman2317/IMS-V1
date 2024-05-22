import { Component } from '@angular/core';
import { RevenueService } from 'src/app/core/myServices/revenue/revenue.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent {
  constructor(private revenue:RevenueService){
this.getRevenue()
  }



  revenueData:any;
  searchQuery:any;
  getRevenue(){
    this.revenue.getAllRevenue().subscribe((res:any)=>{
      console.log(res)
      this.revenueData=res.body;
      console.log(this.revenueData)
    
    })
  }
}

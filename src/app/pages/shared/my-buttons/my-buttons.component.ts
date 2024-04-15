import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-buttons',
  templateUrl: './my-buttons.component.html',
  styleUrls: ['./my-buttons.component.css']
})
export class MyButtonsComponent {
@Input() button:String ='';
}

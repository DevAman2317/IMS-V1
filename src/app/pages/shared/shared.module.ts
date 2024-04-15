import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonsComponent } from './my-buttons/my-buttons.component';



@NgModule({
  declarations: [
    MyButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyButtonsComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EmpSalaryComponent } from './emp-salary/emp-salary.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminListComponent,
    AdminHomeComponent,
    EmpSalaryComponent,
    AdminSidebarComponent,
    AdminContentComponent,
    AdminCoursesComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterOutlet, 
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }

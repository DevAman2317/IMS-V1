import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EmpSalaryComponent } from './emp-salary/emp-salary.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgModel, NgModelGroup, ReactiveFormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { FilterUsersPipe } from './pipes/filter-users.pipe';
import { FilterByListPipe } from './pipes/listFilter/filter-by-list.pipe';
import { AllUserListComponent } from './all-user-list/all-user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { RevenueComponent } from './revenue/revenue.component';


@NgModule({
  declarations: [
    AdminListComponent,
    AdminHomeComponent,
    UserListComponent,
    EmpSalaryComponent,
    AdminSidebarComponent,
    AdminContentComponent,
    AdminCoursesComponent,
    UpdateUserComponent,
    FilterUsersPipe,
    FilterByListPipe,
    AllUserListComponent,
    StudentListComponent,
    TeachersListComponent,
    RevenueComponent,
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterOutlet, 
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    
    
    
    
  ]
})
export class AdminModule { 
  
}

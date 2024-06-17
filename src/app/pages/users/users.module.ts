import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserRegistrationFormComponent } from '../auth/user-registration-form/user-registration-form.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserAttendanceComponent } from './user-attendance/user-attendance.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserContentComponent } from './user-content/user-content.component';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { NotesComponent } from './notes/notes.component';
import { ShowVideoComponent } from './show-video/show-video.component';
import { SharedModule } from '../shared/shared.module';
import { SubscribedCoursesComponent } from './subscribed-courses/subscribed-courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserRegistrationFormComponent,
    UserHomeComponent,
    UserAttendanceComponent,
    UserSidebarComponent,
    UserContentComponent,
    CoursesComponent,
    NotesComponent,
    ShowVideoComponent,
    SubscribedCoursesComponent,
    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterOutlet,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class UsersModule { }

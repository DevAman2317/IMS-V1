import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../admin/user-list/user-list.component';
import { UserRegistrationFormComponent } from '../auth/user-registration-form/user-registration-form.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserResultsComponent } from './user-results/user-results.component';
import { UserAttendanceComponent } from './user-attendance/user-attendance.component';
import { UserContentComponent } from './user-content/user-content.component';
import { CoursesComponent } from './courses/courses.component';
import { NotesComponent } from './notes/notes.component';
import { ShowVideoComponent } from './show-video/show-video.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'userHome',
    pathMatch:'full'
  },
  // {
  //   path:'**',
  //   component:UserHomeComponent
  // },

  {
    path:'userHome', 
    component:UserHomeComponent,
    children:[
      {
        path:'',
        redirectTo:'Courses',
        pathMatch:'full'
      },
      {
        path:'',
        component:CoursesComponent
      },
      {
        path:'results',
        component:UserResultsComponent
      }, 

      {
        path:'attendance', 
        component:UserAttendanceComponent,
       
      },
      {
        path:'Courses', 
        component:CoursesComponent
      },
      {
        path:'notes', 
        component:NotesComponent,
      },  
      {
        path:'videos',
        component:ShowVideoComponent,
      }
      

    ]
  },
  {
    path:'userRegistration',
    component:UserRegistrationFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

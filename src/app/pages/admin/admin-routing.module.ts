import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { EmpSalaryComponent } from './emp-salary/emp-salary.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { CoursesComponent } from '../users/courses/courses.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { authGuard } from '../auth/auth.guard';
import { AllUserListComponent } from './all-user-list/all-user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { RevenueComponent } from './revenue/revenue.component';

const routes: Routes = [
  {
    path:'', 
    redirectTo:'adminHome',
    pathMatch:'full' 
  },

  {
    path:'adminHome',
    component:AdminHomeComponent,
    children:[
      {
        path:'',
        redirectTo:'adminContent',
        pathMatch:'full' 
      },
          
      
      {
        path:'adminContent',
        component:AdminCoursesComponent
      },
        {
          path:'AdminCourses',
          component:AdminCoursesComponent
        },
        {
          path:'Fees',
          component:EmpSalaryComponent
        },
        {
          path:'Users',
          component:UserListComponent,
          children:[
            {
              path:'', 
              redirectTo:'allUsers',
              pathMatch:'full'
            }, 
            {
              path:'allUsers', 
              component:AllUserListComponent
            },
            {
              path:'adminList',
              component:AdminListComponent
            }, 
            {
              path:'studentList',
              component:StudentListComponent
            }, 
            {
              path:'teachersList',
              component:TeachersListComponent
            }, 
             
          ]
         
        },
        {
          path:'revenue',
          component:RevenueComponent
        },
        {
          path:'update/:user_id',
          component:UpdateUserComponent
        }
      
      
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

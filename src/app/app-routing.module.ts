import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationFormComponent } from './modules/auth/user-registration-form/user-registration-form.component';
import { HomeContentComponent } from './Dashboard/home-content/home-content.component';
import { AboutUsComponent } from './Dashboard/about-us/about-us.component';
import { ContactComponent } from './Dashboard/contact/contact.component';
import { ProfessorsComponent } from './Dashboard/professors/professors.component';
import { LatestAchievementComponent } from './Dashboard/latest-achievement/latest-achievement.component';




 
const routes: Routes = [
  {
    path:'',component:HomeContentComponent
  },
  {
    path:'about',
    component:AboutUsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'professors',
    component:ProfessorsComponent
  },
  {
    path:'Achievement',
    component:LatestAchievementComponent
  },
  {
    path:'registration', component:UserRegistrationFormComponent
  },
  
  {
    path:'user',
    loadChildren:()=> import('./modules/users/users.module').then(m=>m.UsersModule)
  },
  {
    path:'admin', canActivate:[],
    loadChildren:()=> import('./modules/admin/admin.module').then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationFormComponent } from './pages/auth/user-registration-form/user-registration-form.component';
import { HomeContentComponent } from './dashboard/home-content/home-content.component';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { ProfessorsComponent } from './dashboard/professors/professors.component';
import { LatestAchievementComponent } from './dashboard/latest-achievement/latest-achievement.component';




 
const routes: Routes = [

  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
{
  path:'home',
 component:HomeContentComponent
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
    loadChildren:()=> import('./pages/users/users.module').then(m=>m.UsersModule)
  },
  {
    path:'admin',
    loadChildren:()=> import('./pages/admin/admin.module').then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

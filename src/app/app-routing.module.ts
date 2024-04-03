import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationFormComponent } from './modules/auth/user-registration-form/user-registration-form.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProfessorsComponent } from './professors/professors.component';




 
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

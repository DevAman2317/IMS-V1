import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Dashboard/header/header.component';
import { FooterComponent } from './Dashboard/footer/footer.component';
import { HomeContentComponent } from './Dashboard/home-content/home-content.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './Dashboard/about-us/about-us.component';
import { ContactComponent } from './Dashboard/contact/contact.component';
import { ProfessorsComponent } from './Dashboard/professors/professors.component';
import { LatestAchievementComponent } from './Dashboard/latest-achievement/latest-achievement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeContentComponent,
    AboutUsComponent,
    ContactComponent,
    ProfessorsComponent,
    LatestAchievementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

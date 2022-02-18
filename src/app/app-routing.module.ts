import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
   {path:'', component:HomepageComponent},
   {path:'chart', component: ChartComponent},
   {path: 'faqs', component: FaqsComponent},
   {path: 'login', component: LoginComponent},
   {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routings = [HomepageComponent,ChartComponent,FaqsComponent,LoginComponent,SignupComponent]

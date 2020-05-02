import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NewsComponent} from './news/news.component';
import {MenuComponent} from './menu/menu.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthguardGuard} from './authguard.guard';



const appRoutes: Routes = [
  {path: 'about' , component : AboutComponent},
  {path: 'home' , component : HomeComponent},
  {path: 'menu' , component : MenuComponent},
  {path: 'news' , component : NewsComponent},
  {path: 'notfound' , component : NotFoundComponent},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

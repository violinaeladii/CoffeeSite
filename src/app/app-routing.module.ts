import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NewsComponent} from './news/news.component';
import {MenuComponent} from './menu/menu.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ContactComponent} from './contact/contact.component';
import {Route, RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'about' , component : AboutComponent},
  {path: 'home' , component : HomeComponent},
  {path: 'menu' , component : MenuComponent},
  {path: 'news' , component : NewsComponent},
  {path: 'contact' , component : ContactComponent},
  {path: 'notfound' , component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

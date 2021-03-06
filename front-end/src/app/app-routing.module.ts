import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {MainComponent} from './main/main.component';
import {UserComponent} from './user/user.component';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: MainComponent },
  { path: 'adduserinfo', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

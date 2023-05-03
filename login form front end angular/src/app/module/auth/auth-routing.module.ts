import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import {LoginPageComponent} from "./commonents/login-page/login-page.component";
import {SignUpItemPageComponent} from "./commonents/login-page/inner-items/sign-up-item-page/sign-up-item-page.component";
import {LoginItemPageComponent} from "./commonents/login-page/inner-items/login-item-page/login-item-page.component";

const routes: Routes = [
  { path: '', redirectTo:'/auth/login' ,pathMatch:'full'},
  {path:'login',component:LoginPageComponent,children:[
      {path:'',redirectTo:'/auth/login/access',pathMatch:'full'},
      {path:'register',component:SignUpItemPageComponent},
      {path:'access',component:LoginItemPageComponent}
    ]},

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

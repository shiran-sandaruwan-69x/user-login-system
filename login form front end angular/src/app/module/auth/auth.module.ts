import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './commonents/login-page/login-page.component';
import { LoginItemPageComponent } from './commonents/login-page/inner-items/login-item-page/login-item-page.component';
import { SignUpItemPageComponent } from './commonents/login-page/inner-items/sign-up-item-page/sign-up-item-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {CookieModule} from "ngx-cookie";


@NgModule({
  declarations: [
    AuthComponent,
    LoginPageComponent,
    LoginItemPageComponent,
    SignUpItemPageComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatIconModule,
      HttpClientModule,
      MatProgressBarModule,
      CookieModule.forRoot(),
      FormsModule
    ]
})
export class AuthModule { }

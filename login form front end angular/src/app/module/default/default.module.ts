import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {CookieModule} from "ngx-cookie";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    MatPaginatorModule,
    CookieModule.forRoot(),
    HttpClientModule,

  ]
})
export class DefaultModule { }

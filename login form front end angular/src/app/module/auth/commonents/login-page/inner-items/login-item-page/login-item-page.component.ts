import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-login-item-page',
  templateUrl: './login-item-page.component.html',
  styleUrls: ['./login-item-page.component.scss']
})
export class LoginItemPageComponent implements OnInit {
  loginForm=new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.minLength(6),Validators.maxLength(20),Validators.required])
  })
  constructor(private cookieService:CookieService ,private userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
  this.userService.login(
    this.loginForm.get('email')?.value.toString().trim(),
    this.loginForm.get('password')?.value.toString().trim()
  ).subscribe(response=>{

    const todayDate=new Date();
    const tommrow=new Date(todayDate);
    tommrow.setDate(tommrow.getDate()+1);

    const cookieOption={
      expires:tommrow
    }

    this.cookieService.put('userToken',response.token,cookieOption);
    alert(response.message)

  },error => {
    if (error.status===500){
      //internal server error
    }else if (error.status===400){
      //client server error
    }else {
      console.log(error);
    }
  })
  }



}

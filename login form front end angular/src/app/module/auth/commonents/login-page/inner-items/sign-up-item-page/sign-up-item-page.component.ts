import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import UserDTO from "../../../../dto/UserDTO";
import {UserService} from "../../../../services/user.service";


@Component({
  selector: 'app-sign-up-item-page',
  templateUrl: './sign-up-item-page.component.html',
  styleUrls: ['./sign-up-item-page.component.scss']
})
export class SignUpItemPageComponent implements OnInit {

  signUpForm=new FormGroup({
    fName:new FormControl('',[Validators.minLength(3),Validators.required]),
    lName:new FormControl('',[Validators.minLength(3),Validators.required]),
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.minLength(6),Validators.maxLength(20),Validators.required])
  })



  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  loading=false;

  register(){
    this.loading=true;

    const date=new Date();
    const time=date.getHours()+' : '+date.getMinutes()+' : '+date.getSeconds();

    const dto=new UserDTO(
      this.signUpForm.get('fName')?.value.toString(),
      this.signUpForm.get('lName')?.value.toString(),
      this.signUpForm.get('email')?.value.toString(),
      this.signUpForm.get('password')?.value.toString(),
      '',
      true,
      date,
      time
    );

    console.log(dto);

    this.userService.register(dto).subscribe(response=>{
      this.loading=false;
    console.log(response);
    },error=>{
      this.loading=false;
    console.log(error);
    });

  }

}

import { Injectable } from '@angular/core';
import UserDTO from "../dto/UserDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  public register(dto : UserDTO):Observable<any>{
  return this.http.post(this.baseUrl+'userRoute/registerUser',{

    fName:dto.fName,
    lName:dto.lName,
    email:dto.email,
    password:dto.password,
    avatar:dto.avatar,
    userState:dto. userState,
    regDate:dto.regDate,
    regTime:dto.regTime,


  });
  }

  public login(email:string, password:string ):Observable<any>{
   return  this.http.get(this.baseUrl+'userRoute/login',{
     headers:{email,password}
   })
  }

}

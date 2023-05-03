import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient,private cookieService:CookieService) { }

  private getToken():string{
  const tempToken=this.cookieService.get('userToken');
  if (tempToken===undefined){
    return 'empty';
  }else {
   return tempToken;
  }
  }

  public getAllProduct():Observable<any>{
    return this.http.get(this.baseUrl+'/productRoute/getAllProduct?token'+this.getToken());
  }

}

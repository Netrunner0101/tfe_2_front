import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {url_dev} from "../global";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = url_dev;
  private isLogged:boolean = false;

  constructor(private http:HttpClient,private router:Router) { }

  login(user:any){
    this.http.post(this.url+'/api/Authenticate/login',user).subscribe(
      (data:any) =>{
        console.log(data);
        sessionStorage.setItem('token',data.token);
        //this.isLogged = true;
      }
    );
  }

  isLoggedValue(){
    console.log("Islogged value : "+this.isLogged)
    return this.isLogged;
  }

  logout(){
    sessionStorage.removeItem('token')
    return this.router.navigateByUrl('')
  }

  register(user:any):any{
    return this.http.post(this.url+'/tms/register',user)
  }


}

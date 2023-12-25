import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login/login.service";


@Injectable()
export class GuardService implements CanActivate {

  constructor(
    private auth : LoginService,
    private router : Router
    ){}

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    // alert('you are not selma')

    if(!this.auth.getAuthorization()){
      this.router.navigate([''])
      alert('you are not selma')
    }


    return this.auth.getAuthorization();



  }
}

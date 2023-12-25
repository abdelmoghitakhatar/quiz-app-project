import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login/login.service";


@Injectable()
export class GuardOthersService implements CanActivate {

  constructor(
    private auth : LoginService,
    private router : Router
    ){}

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    // alert('you are not selma')

    if(!this.auth.getOthersAuthorization()){
      this.router.navigate([''])
      alert('Please set your login information')
    }
    return this.auth.getOthersAuthorization();
  }
}

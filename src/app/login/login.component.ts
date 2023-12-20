import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './login.module';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected readonly backgroundColor : string = 'black'

  myLove!: LoginModel ;

  login : LoginModel = new LoginModel('', '', new Date()) ;
  loginDate!: string;

  constructor(
    private router : Router,
    private loginService : LoginService,
    ){}
    
  ngOnInit(): void {
    this.loginService.loginData().subscribe(data => {
      this.myLove = {
        firstName: data.firstName,
        lastName: data.lastName,
        birthday: new Date(data.birthday)
      }
    });

    document.body.style.backgroundColor = this.backgroundColor;
  }

  loginPlayer(){
    this.login.birthday = new Date(this.loginDate);
    if(this.isMyLove(this.login)){
      this.loginService.setAuthorization(this.isMyLove(this.login));
      this.router.navigateByUrl('quiz');
    }else{
      this.loginService.setOthersAuthorization(true);
      this.router.navigateByUrl('home');
    }
  }

  // loginPlayer(){

  // }

  isMyLove(login: LoginModel): boolean{
    return(
      login.lastName.toLowerCase() === this.myLove.lastName && 
      login.firstName.toLowerCase() === this.myLove.firstName &&
      login.birthday.valueOf() === this.myLove.birthday.valueOf()
      )
  }
}

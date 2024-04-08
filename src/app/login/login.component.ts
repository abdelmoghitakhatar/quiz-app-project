import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginModel } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected readonly backgroundColor : string = 'black'

  login : LoginModel = new LoginModel('', '');
  readonly noticeMessage: string = 'This is a test version for practice' 

  constructor(
    private router : Router,
    private loginService : LoginService,
    private titleService : Title
    ){
    this.titleService.setTitle(this.router.routerState.snapshot.root.firstChild?.data['title']);}
    
  ngOnInit(): void {
    this.loginService.setOthersAuthorization(false);
    document.body.style.backgroundColor = this.backgroundColor;
  }

  loginPlayer(){
    this.loginService.setOthersAuthorization(this.login.firstName!=='' && this.login.lastName!=='');
    this.loginService.setLoginInformation(this.login)
    this.router.navigateByUrl('quiz');
  }
}

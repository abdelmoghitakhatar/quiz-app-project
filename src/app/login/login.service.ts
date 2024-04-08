import { Injectable } from "@angular/core";
import { LoginModel } from './login.model';

@Injectable({
    providedIn: "root"
})
export class LoginService {

    private othersAuthorization: boolean = false;
    private loginInformation!: LoginModel;

    getOthersAuthorization(): boolean{
        return this.othersAuthorization;
    }

    setOthersAuthorization(auth:boolean): void{
        this.othersAuthorization = auth ;
    }

    getLoginInformation(): LoginModel{
        return this.loginInformation;
    }

    setLoginInformation(loginInformation: LoginModel): void{
        this.loginInformation = loginInformation;
    }
}
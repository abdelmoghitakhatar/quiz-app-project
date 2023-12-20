import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { LoginModel } from './login.module';

@Injectable({
    providedIn: "root"
})
export class LoginService {

    private authorization: boolean = false;
    private othersAuthorization: boolean = false;

    constructor(
        private http: HttpClient
    ) { }

    loginData(): Observable<LoginModel> {
        return this.http.get<LoginModel>('/assets/data.json');
    }

    getAuthorization(): boolean {
        return this.authorization;
    }

    setAuthorization(auth:boolean): void{
        this.authorization = auth ;
    }

    getOthersAuthorization(): boolean{
        return this.othersAuthorization;
    }

    setOthersAuthorization(auth:boolean): void{
        this.othersAuthorization = auth ;
    }
}
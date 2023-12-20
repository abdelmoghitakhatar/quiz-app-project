import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardOthersService } from "./app-guard-others.service";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { QuizComponent } from "./quiz/quiz.component";

const routes: Routes= [
    {path: 'home', component: HomeComponent, canActivate:[GuardOthersService]},
    // {path: 'quiz', component: QuizComponent, canActivate:[GuardService]},
    {path: 'quiz', component: QuizComponent},
    {path: '', component: LoginComponent},
    {path:'**', redirectTo: ''}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}
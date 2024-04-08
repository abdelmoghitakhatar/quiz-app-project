import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardOthersService } from "./app-guard-others.service";
import { LoginComponent } from "./login/login.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultatsComponent } from "./resultats/resultats.component";

const routes: Routes= [
    {
        path: '', 
        component: LoginComponent,
        data: {
            title: 'Quiz - Login'
        }
    },
    {
        path: 'quiz', 
        component: QuizComponent, 
        canActivate:[GuardOthersService],
        data: {
            title: 'Questions'
        }
    },
    {
        path: 'resultats', 
        component: ResultatsComponent, 
        canActivate:[GuardOthersService],
        data: {
            title: 'Your Score'
        }
    },
    {
        path:'**', redirectTo: ''
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardOthersService } from "./app-guard-others.service";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from "./home/home.component";
import { ILoveYouComponent } from "./i-love-you/i-love-you.component";
import { LoginComponent } from "./login/login.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultatsComponent } from "./resultats/resultats.component";

const routes: Routes= [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate:[GuardOthersService]},
    // TODO : adapt guard for quiz, gallery, results and iLoveYou 
    // {path: 'quiz', component: QuizComponent, canActivate:[GuardService]},
    {path: 'quiz', component: QuizComponent, canActivate:[GuardOthersService]},
    {path: 'gallery', component: GalleryComponent, canActivate:[GuardOthersService]},
    {path: 'i-love-you', component: ILoveYouComponent, canActivate:[GuardOthersService]},
    {path: 'resultats', component: ResultatsComponent, canActivate:[GuardOthersService]},
    {path:'**', redirectTo: ''}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}
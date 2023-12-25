import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardOthersService } from "./app-guard-others.service";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from "./home/home.component";
import { ILoveYouComponent } from "./i-love-you/i-love-you.component";
import { LoginComponent } from "./login/login.component";
import { QuizComponent } from "./quiz/quiz.component";

const routes: Routes= [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate:[GuardOthersService]},
    {path: 'quiz', component: QuizComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'i-love-you', component: ILoveYouComponent},
    {path:'**', redirectTo: ''}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}
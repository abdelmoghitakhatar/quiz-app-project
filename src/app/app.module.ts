import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GuardOthersService } from './app-guard-others.service';
import { GuardService } from './app-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentQuestionComponent } from './current-question/current-question.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ILoveYouComponent } from './i-love-you/i-love-you.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultatsComponent } from './resultats/resultats.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuizComponent,
    GalleryComponent,
    CurrentQuestionComponent,
    ILoveYouComponent,
    ResultatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
  ],
  providers: [
    GuardService,
    GuardOthersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GuardOthersService } from './app-guard-others.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentQuestionComponent } from './current-question/current-question.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultatsComponent } from './resultats/resultats.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizComponent,
    CurrentQuestionComponent,
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
    GuardOthersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

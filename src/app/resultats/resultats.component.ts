import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginModel } from '../login/login.model';
import { LoginService } from '../login/login.service';
import { QuizModel, Results } from '../quiz/quiz-model';
import { QuizService } from '../quiz/quiz.service';
import { Score } from './score-model';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {

  questions!: QuizModel[];
  resultats!: Results[];
  score: Score = {totalQuestions: 0, totalCorrectAnswers: 0};

  loginInformation!: LoginModel;

  constructor(
    private quizService: QuizService,
    private router: Router,
    private titleService : Title,
    private loginService : LoginService
  ){
    this.titleService.setTitle(this.router.routerState.snapshot.root.firstChild?.data['title']);}

  ngOnInit(): void {
    document.body.style.background = '#88AB8E';
    this.questions = this.quizService.getQuizQuestions();
    this.resultats = this.quizService.getQuizResults();
    this.loginInformation = this.loginService.getLoginInformation();
    this.calculeScore();

  }

  nextPage(): void{
    if(confirm(`Thank you ${this.loginInformation.firstName} ${this.loginInformation.lastName} for taking this quiz\nDo you want exit ?`))
    this.router.navigateByUrl('/')
  }

  calculeScore(): void{
    let questions = this.questions;
    let result = this.resultats;
    if(questions&&result){
      this.score.totalQuestions = questions.length;
      result.forEach(item => {
        questions.forEach(element => {
          if(element.id===item.answeredQuestion && element.answer===item.selectedAnswer){
            this.score.totalCorrectAnswers++;
          }
        })
      });
    }
  }

}
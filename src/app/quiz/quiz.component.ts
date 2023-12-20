import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { QuizModel } from './quiz-model';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {
  
  quizQuestions!: QuizModel[];
  // quizQuestions$!: Observable<QuizModel[]>;

  constructor(
    private quizService: QuizService,
    private loginService: LoginService
    ) {}

  ngOnInit(): void {
    this.quizService.getQuestionsAndAnswers().subscribe(quizQuestions => this.quizQuestions = quizQuestions);
    // this.quizQuestions$ = this.quizService.getQuestionsAndAnswers()
  }

  ngOnDestroy(): void {
    this.loginService.setAuthorization(false);
  }
  

}

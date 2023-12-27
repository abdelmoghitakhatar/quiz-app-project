import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private quizService: QuizService,
    private router: Router
  ){}

  ngOnInit(): void {
    document.body.style.background = '#88AB8E';
    this.questions = this.quizService.getQuizQuestions();
    this.resultats = this.quizService.getQuizResults();
    this.calculeScore();
  }

  nextPage(): void{
    this.router.navigateByUrl('i-love-you')
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
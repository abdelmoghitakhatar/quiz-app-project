import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizModel, Results } from './quiz-model';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  protected readonly backgroundColor: string = '#624132';

  quizQuestions!: QuizModel[];
  currentQuestionId: number = 0;
  quizReults: Results[] = [];

  constructor(
    private quizService: QuizService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.quizService.getQuestionsAndAnswers()
      .subscribe(quizQuestions => {
        this.quizQuestions = quizQuestions;
        this.quizReults = [];
      });

    document.body.style.backgroundColor = this.backgroundColor;
  }

  nextQuestion(quizReult: Results) {
      this.quizReults.push(quizReult);
    if (this.currentQuestionId + 1 === this.quizQuestions.length) {
      this.router.navigateByUrl('gallery');
      this.quizService.setQuizResults(this.quizReults)
    } else {
      this.currentQuestionId++;
    }
  }

  public displayedQuestions(): number[] {
    if(this.quizQuestions){
      let displayCount: number; 
      if(this.quizQuestions.length >= 8){
        displayCount = 8;
      }else{
        displayCount = this.quizQuestions.length;
      }
      const currentId = this.currentQuestionId;
      let startIndex = Math.max(1, currentId - Math.floor(displayCount / 2));
      let endIndex = Math.min(startIndex + displayCount - 1, this.quizQuestions.length);

      if (startIndex === 1) {
        endIndex = displayCount;
      } else if (endIndex === this.quizQuestions.length) {
        startIndex = Math.max(1, endIndex - displayCount + 1);
      }

      return Array.from({ length: endIndex - startIndex + 1 }, (_, i) => startIndex + i);
    }else{
      return []
    }
  }


}

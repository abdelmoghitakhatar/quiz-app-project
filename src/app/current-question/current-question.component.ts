import { Component, EventEmitter, Input, Output } from '@angular/core';
import { interval, take } from 'rxjs';
import { QuizModel, Results } from '../quiz/quiz-model';

@Component({
  selector: 'app-current-question',
  templateUrl: './current-question.component.html',
  styleUrls: ['./current-question.component.css']
})
export class CurrentQuestionComponent {

  questionsAnswered: boolean = false;
  correctAnswerClass: boolean = false;
  selectedAnswer!: number;


  @Input('question')
  currentQuestion!: QuizModel;

  @Output()
  answerEmitter: EventEmitter<Results> = new EventEmitter<Results>();

  emitAnswer(answer: number): void{

    this.selectedAnswer = answer;
    this.questionsAnswered = !this.questionsAnswered;
    let questionResult: Results = {
      answeredQuestion: this.currentQuestion.id,
      selectedAnswer: answer
    }

    if(this.currentQuestion.answer === answer){
      this.correctAnswerClass = true;
    }

    interval(3000).pipe(take(1)).subscribe(() => {
      
      this.answerEmitter.emit(questionResult);
      this.questionsAnswered = !this.questionsAnswered;
      this.correctAnswerClass = false;
    });
  }

}

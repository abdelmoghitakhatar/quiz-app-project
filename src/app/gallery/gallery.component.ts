import { Component, OnInit } from '@angular/core';
import { Results } from '../quiz/quiz-model';
import { QuizService } from '../quiz/quiz.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  results!: Results[];

  constructor(
    private quizService: QuizService
  ){}

  ngOnInit(): void {
    this.results = this.quizService.getQuizResults();
  }

}

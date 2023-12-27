import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { QuizModel, Results } from "./quiz-model";

@Injectable({
    providedIn: "root"
})
export class QuizService {

    private quizReults!: Results[];
    private quizQuestions!: QuizModel[];

    constructor(
        private http: HttpClient
    ){}

    getQuestionsAndAnswers(): Observable<QuizModel[]>{
        return this.http.get<QuizModel[]>('/assets/questions.json');
    }

    setQuizResults(quizReults: Results[]):void{
        this.quizReults = quizReults ;
    }

    getQuizResults(): Results[]{
        return this.quizReults;
    }

    setQuizQuestions(quizQuestions: QuizModel[]):void{
        this.quizQuestions = quizQuestions ;
    }

    getQuizQuestions(): QuizModel[]{
        return this.quizQuestions;
    }
}
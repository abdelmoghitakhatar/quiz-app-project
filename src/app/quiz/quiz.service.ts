import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { QuizModel } from "./quiz-model";

@Injectable({
    providedIn: "root"
})
export class QuizService {

    private QA!: QuizModel;

    constructor(
        private http: HttpClient
    ){}

    getQuestionsAndAnswers(): Observable<QuizModel[]>{
        return this.http.get<QuizModel[]>('/assets/questions.json');
    }
}
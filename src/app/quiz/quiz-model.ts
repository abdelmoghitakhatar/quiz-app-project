export class QuizModel {
    id! : number;
    question! : string;
    options! : OptionsModel[];
    answer! : number;
}

export class OptionsModel {
    id! : number;
    option!: string;
}
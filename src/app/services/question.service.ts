import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../question';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  static values : string[] = []
  static lastVisited : string
  private questionUrl = 'app/questions';
  observableAnswers  = new Observable<string[]>();


  constructor(
    private http: HttpClient
  ) { }

  getQuestions(): Observable<Question[]>{
    return this.http.get<Question[]>(this.questionUrl);
  }

  getQuestion(id: number): Observable<Question>{
    const url = `${this.questionUrl}/${id}`
    return this.http.get<Question>(url);

  }
  //TODO: Figure out, why this cant be added 
  pushAnswer(answer: string): void {
   // this.observableAnswers.pipe(tap(answerList => {
   //   answerList.push(answer);
   // }));
   this.observableAnswers.subscribe(answerList => answerList.push(answer));
  }

  getAnswers(): Observable<string[]> {
    return this.observableAnswers;
  }

addToValue(input : string) {

  QuestionService.values.push(input);

}
}


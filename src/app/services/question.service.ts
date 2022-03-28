import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs';
import { Question } from '../question';
import { Answer } from '../answer';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  static values : string[] = []
  static lastVisited : string
  private answer = {} as Answer;
  private questionUrl = 'api/questions';
  private answerUrl = 'api/answers';
 // observableAnswers  = new Observable<string[]>();
// observableAnswers = new BehaviorSubject("initial value");


  constructor(
    private httpQuestion: HttpClient,
    private httpAnswer: HttpClient
  ) { }

  getQuestions(): Observable<Question[]>{
    return this.httpQuestion.get<Question[]>(this.questionUrl);
  }

  getQuestion(id: number): Observable<Question>{
    const url = `${this.questionUrl}/${id}`
    return this.httpQuestion.get<Question>(url);

  }
  //TODO: Figure out, why this cant be added 
  addAnswer(answer : Answer): Observable<Answer> {
  
   return this.httpAnswer.post<Answer>(this.answerUrl, answer, this.httpOptions).pipe(
     tap((newAnswer: Answer) => console.log(`added answer w/ answer=${newAnswer.answerText}`)),
     catchError(this.handleError<Answer>('addHero')));
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of (result as T);
    };
    
  }  
/*   getAnswers(): Observable<string[]> {
    return this.observableAnswers;
  } */

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getAnswers(): Observable<Answer[]> {
    //  console.log(this.httpAnswer.get<Answer[]>(this.answerUrl).length)
      return this.httpAnswer.get<Answer[]>(this.answerUrl)
  }

addToValue(input : string) {
  QuestionService.values.push(input);
}
}


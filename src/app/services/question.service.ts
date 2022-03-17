import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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
  private answerUrl = 'api/answer';
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
   // this.observableAnswers.pipe(tap(answerList => {
   //   answerList.push(answer);
   // }));
   // this.observableAnswers.subscribe(answerList => answerList.push(answer));

   
    console.log("hello")
   return this.httpAnswer.post<Answer>(this.answerUrl, answer, this.httpOptions);
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


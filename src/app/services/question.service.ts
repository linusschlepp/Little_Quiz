import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs';
import {Question} from '../question';
import {Answer} from '../answer';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionUrl = 'api/questions';
  private answerUrl = 'api/answers';
  static lastVisited: string = "";
  ranIndeces: number[] = []
  private number: number = 0


  constructor(
    private httpQuestion: HttpClient,
    private httpAnswer: HttpClient
  ) {
    // while (this.ranIndeces.length < 5) {
    //   const ranIndex = Math.floor(Math.random() * 5);
    //   if (this.ranIndeces.indexOf(ranIndex) === -1)
    //     this.ranIndeces.push(ranIndex);
    // }
    this.shuffle();
  }

  getQuestions(): Observable<Question[]> {
    return this.httpQuestion.get<Question[]>(this.questionUrl);
  }

  getQuestion(id: number): Observable<Question> {
    const url = `${this.questionUrl}/${id}`
    return this.httpQuestion.get<Question>(url);
  }

  addAnswer(answer: Answer): Observable<Answer> {

    return this.httpAnswer.post<Answer>(this.answerUrl, answer, this.httpOptions).pipe(
      tap((newAnswer: Answer) => console.log(`added answer w/ answer=${newAnswer.answerText}`)),
      catchError(this.handleError<Answer>('addHero')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  deleteAnswer(id: number): Observable<Answer> {
    const url = `${this.answerUrl}/${id}`;

    return this.httpAnswer.delete<Answer>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted answer id=${id}`)),
      catchError(this.handleError<Answer>('delete answer'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getAnswers(): Observable<Answer[]> {

    return this.httpAnswer.get<Answer[]>(this.answerUrl)
  }

  shuffle(){
    this.ranIndeces = [];
    while (this.ranIndeces.length < 5) {
      const ranIndex = Math.floor(Math.random() * 5);
      if (this.ranIndeces.indexOf(ranIndex) === -1)
        this.ranIndeces.push(ranIndex);
    }
  }

}


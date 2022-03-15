import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../question';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  static values : string[] = []
  static lastVisited : string
  private questionUrl = 'app/questions';
  private answers : string[] = [];


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

  pushAnswer(answer: string): void {
    this.answers.push(answer);
  }

  getAnswers(): string[] {
    return this.answers;
  }

addToValue(input : string) {

  QuestionService.values.push(input);

}
}


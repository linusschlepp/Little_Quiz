import { Injectable } from '@angular/core';
import { QUESTIONS } from '../mock-questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  static values : string[] = []

  constructor() { }
  
addToValue(input : string) {

  QuestionService.values.push(input);

}
}


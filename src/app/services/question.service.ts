import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  static values : string[] = []
  static lastVisited : string

  constructor() { }
  
addToValue(input : string) {

  QuestionService.values.push(input);

}
}


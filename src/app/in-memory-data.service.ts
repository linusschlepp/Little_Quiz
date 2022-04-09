import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Answer } from './answer';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const questions = [

      {
          id: 1,
          questionText: 'Whats the sum of 9 + 10?',
          answer: '19',
          answerAndQuestion: 'Whats the sum of 9 + 10?{"answer":"19"}'

      },
      {
          id: 2,
          questionText: 'Whats the capital of France?',
          answer: 'Paris',
          answerAndQuestion: 'Whats the capital of France?{"answer":"Paris"}'
      },

      {
          id: 3,
          questionText: 'Whats the difference of 12 - 10?',
          answer: '2',
          answerAndQuestion: 'Whats the difference of 12 - 10?{"answer":"2"}'
      },

      {
          id: 4,
          questionText: 'Whats the capital of Germany?',
          answer: 'Berlin',
          answerAndQuestion: 'Whats the capital of Germany?{"answer":"Berlin"}'
      },

      {
          id: 5,
          questionText: 'Whats the result of 5 x 5?',
          answer: '25',
          answerAndQuestion: 'Whats the result of 5 x 5?{"answer":"25"}'
      },

      {
        id: 6,
        questionText: 'Whats the capital of Russia?',
        answer: 'Moscow',
        answerAndQuestion: 'Whats the capital of Russia?{"answer":"Moscow"}'
      },

      {
        id: 7,
        questionText: 'Whats the result of 7 x 7?',
        answer: '49',
        answerAndQuestion: 'Whats the result of 7 x 7?{"answer":"49"}'
      },
      {
        id: 8,
        questionText: 'Whats the result of 9 x 9?',
        answer: '81',
        answerAndQuestion: 'Whats the result of 9 x 9?{"answer":"81"}'
      },

      {
        id: 9,
        questionText: 'Whats the capital of Spain?',
        answer: 'Madrid',
        answerAndQuestion: 'Whats the capital of Spain?{"answer":"Madrid"}'
      },

      {
        id: 10,
        questionText: 'Whats 9 + 11?',
        answer: '20',
        answerAndQuestion: 'Whats 9 + 11?{"answer":"20"}'
      },


      ];

      const answers = [
      {
        id: 1,
        answerText: ' '
      }
      ];
      return {questions, answers}
  }

  // genId(heroes: Answer[]): number{
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) +1 : 11;
  // }

  constructor() { }
}

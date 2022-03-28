import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataAnswersService implements InMemoryDbService {
  createDb(){
    const answers = [
       {
          answerText: ' '

        } 
    ];
    return {answers}


  }

  constructor() { }
}

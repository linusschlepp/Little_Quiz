import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { QuestionComponent } from '../question/question.component';
import { QUESTIONS } from 'src/app/mock-questions';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  printStuff(list: boolean[]){
      
  }

  evaluate(index: number): boolean{
      

     if( '{"answer":"'+QUESTIONS[index].answer +'"}'== JSON.stringify(QuestionService.values[index]))
       return true;
            

        return false;
      }
  
      checkSize(): boolean{
        
        if(QuestionService.values.length == 0)
          return false;

        
        return true;
      }
        
      getSize(){

        return QuestionService.values
      }
    getAnswer(index: number): string{

      console.log(JSON.stringify(QuestionService.values[index]))
      return JSON.stringify(QuestionService.values[index]).replace('{"answer":"','').replace('"}','')

    }

      clear(){

        QuestionService.values = []
      }
  }






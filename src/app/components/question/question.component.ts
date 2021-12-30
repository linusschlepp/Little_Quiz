import { Component, Input, OnInit } from '@angular/core';
import { QUESTIONS } from 'src/app/mock-questions';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
    @Input() basicVariable: number = 0;
    @Input() list!: string[];
    listBoolean!: boolean[];



  constructor(private questionService : QuestionService) { 
    console.log(this.basicVariable)
  }


  pushToList(input: string){
    
    console.log("pushed")
    this.list.push(input);

  }

  evaluateStuff(){

    this.list.forEach(item => {
      if(item===QUESTIONS[0].answer)
      this.listBoolean.push(true);
    else
      this.listBoolean.push(false);
    });

    }

  printStuff(){

    

    if(QuestionService.values == undefined || QuestionService.values.length == 0){
      console.log("Is empty");
      return;
    }
    
   

  QuestionService.values.forEach(item => {
    console.log(item);
  })
  }
    
  ngOnInit(): void {
  }

  getSize() {

  return QUESTIONS;

  }

  setLastVisited(){

    QuestionService.lastVisited = "\question"
  }
  

}




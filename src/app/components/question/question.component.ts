import { Component, Input, OnInit } from '@angular/core';
import { QUESTIONS } from 'src/app/mock-questions';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

   


  constructor() { 
    
  }

  ngOnInit(): void {
  }

  getSize() {

  return QUESTIONS;

  }

  setLastVisited(){

    QuestionService.lastVisited = "//question"
  }
  

}




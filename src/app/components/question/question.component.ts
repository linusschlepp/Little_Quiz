import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: Question[] = [];
 
   
  constructor(private questionService: QuestionService) { 
    
  }

    


  ngOnInit(): void {
    this.intitialize();
  }

  getSize() {

  return this.questions;

  }

 private intitialize(): void {

    this.questionService.getQuestions()
      .subscribe(question => this.questions = question);
  }



}




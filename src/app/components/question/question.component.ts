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

  constructor(
    private questionService: QuestionService) {

  }

  ngOnInit(): void {

    this.initialize();
  }


private initialize() {

  this.questionService.getQuestions()
  .subscribe(question => this.questions = question.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value));

}

}




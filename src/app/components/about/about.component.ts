import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getLastVisited(): string {

    return QuestionService.lastVisited;
  }

  setLastVisited(){

    QuestionService.lastVisited = "//about"
  }

}

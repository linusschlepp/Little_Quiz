import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  
  checkIfAbout(): boolean {

    return !(QuestionService.lastVisited == "//about");

  }

  getLastVisited(): string {

    return QuestionService.lastVisited;
  }

}

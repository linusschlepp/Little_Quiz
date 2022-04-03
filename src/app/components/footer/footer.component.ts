import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //TODO: Want to add  Location to this component and get rid the lastVisited variable
  constructor(private location: Location) { }

  ngOnInit(): void {
  }



  checkIfAbout(): boolean {

    return !(this.location.path(true) === "/about");

  }


}

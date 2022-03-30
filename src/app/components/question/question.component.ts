import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Question } from 'src/app/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: Question[] = [];
  tempQuestions: Question[] = [];
  bool: boolean = false;
  private counter: number = 0;


  constructor(
    private questionService: QuestionService) {

  }



  ngOnInit(): void {

    this.initialize();

  }

  setTempQuestions() {
    console.log("length of questions" +this.questions.length)
    for(let i = 0 ; i < this.questions.length; i+=1){
      let ranIndex = Math.floor(Math.random()*this.questions.length)
      this.tempQuestions[i] = this.questions[ranIndex]
      console.log(ranIndex)
}
  }

  getSize() {

   if(this.counter < 2)
      this.questions = this.questions.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

   console.log(this.counter)

    this.counter = this.counter +1;
    this.bool = true;

    return this.questions;

  }


private initialize() {
  this.questionService.getQuestions()
  .subscribe(question => this.questions = question);


}

}




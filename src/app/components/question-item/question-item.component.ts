import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QUESTIONS } from 'src/app/mock-questions';
import { QuestionService } from 'src/app/services/question.service';
import { QuestionComponent } from '../question/question.component';


@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {

  @Input() 
  customIndex!: number;
 // @Output() 
 // var: any = (<HTMLInputElement>document.getElementById("linput")).value;
 @Input() list!: string[];

 checkoutForm = this.formBuilder.group({
  answer: ''
});

  constructor(
    private questionComponent: QuestionComponent,
    private questionService: QuestionService,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }


  displayQuestion(index: number): string{
    
    return QUESTIONS[index].text;
   
    }

    
  getInput() {
    console.log((<HTMLInputElement>document.getElementById("linput")).value)
    return (<HTMLInputElement>document.getElementById("linput")).value;

  }

  getValue(value: boolean): boolean{

    return value;
  }

  pushToList(){
    
    this.list.push((<HTMLInputElement>document.getElementById("linput")).value);
    console.log((<HTMLInputElement>document.getElementById("linput")).value)

  }

  onSubmit(): void{
      console.log("submitted")
      // this.questionService.addToValue(this.checkoutForm.value)
      QuestionService.values.push(this.checkoutForm.value)
  }

}

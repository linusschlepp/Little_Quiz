import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QUESTIONS } from 'src/app/mock-questions';
import { QuestionService } from 'src/app/services/question.service';



@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {

  @Input()
  customIndex!: number;



  checkoutForm = this.formBuilder.group({
    answer: ''
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  displayQuestion(index: number): string {

    return QUESTIONS[index].text;

  }

  onSubmit(): void {

    console.log("submitted")

    QuestionService.values[this.customIndex] = this.checkoutForm.value
  }

}

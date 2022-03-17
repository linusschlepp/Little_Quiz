import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Answer } from 'src/app/answer';
import { QUESTIONS } from 'src/app/mock-questions';
import { Question } from 'src/app/question';
import { QuestionService } from 'src/app/services/question.service';



@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {

  questions: Question[] = []
  answers: Answer[] = []
  length: number = 0
  @Input()
  customIndex!: number;
  answerText: string = ""

  checkoutForm = this.formBuilder.group({
    answer: ''
  });

  constructor(private formBuilder: FormBuilder, 
    private questionService : QuestionService) { }

  ngOnInit(): void {
  }


  displayQuestion(index: number): string {
    
  //  return QUESTIONS[index].text;
   //return this.questionService.getQuestions().subscribe(questions => this.questions = questions.slice(1,index)).text;
   this.questionService.getQuestions()
        .subscribe(question => this.questions = question);

    return this.questions[index].questionText;


  }

  onSubmit(): void {

    console.log("submitted")

    const answerText = this.checkoutForm.value

   // QuestionService.values[this.customIndex] = this.checkoutForm.value
  
   
  // this.questionService.getAnswers().subscribe(answers => this.answers = answers)
   //console.log(this.questionService.getAnswers.length);
   this.questionService.addAnswer({answerText} as Answer).
    subscribe(answer => {
      this.answers.push(answer);
    });
  }

}

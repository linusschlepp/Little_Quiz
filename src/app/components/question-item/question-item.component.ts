import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Answer} from 'src/app/answer';
import {Question} from 'src/app/question';
import {QuestionService} from 'src/app/services/question.service';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})

// TODO: elements added to formGroup are still undefinded, try to fix
export class QuestionItemComponent implements OnInit {

  questions: Question[] = []
  answers: Answer[] = []
  checkoutForm!: FormGroup;

  @Input()
  question!: string | undefined;
  @Input()
  customIndex!: number;
  answerText: string = "";


  constructor(
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getAnswers();
    this.checkoutForm = this.formBuilder.group({
      answer: new FormControl('')
    });
    this.getId()
  }


  displayQuestion(index: number) {

   return this.questions[this.getId()-1].questionText;



  }

  private getAnswers() {
    this.questionService.getAnswers()
      .subscribe(answers => this.answers = answers)
    this.questionService.getQuestions()
      .subscribe(question => this.questions = question);
  }

  getId(): number {

   return Number(this.route.snapshot.paramMap.get('id'));

  }



  clearCheckOut(){
    this.checkoutForm.reset();
  }


  onSubmit(): void {

    this.question = this.questions[this.getId()-1].questionText;
    const answerText = this.question+JSON.stringify(this.checkoutForm.value)


    if (!answerText)
      return;
    this.questionService.addAnswer({answerText} as Answer).subscribe(answer => {
      this.answers.push(answer);
    });

    console.log("submitted")



  }



}

import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Answer} from 'src/app/answer';
import {Question} from 'src/app/question';
import {QuestionService} from 'src/app/services/question.service';


@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {

  questions: Question[] = []
  answers: Answer[] = []

  @Input()
  question!: string | undefined;
  @Input()
  customIndex!: number;
  answerText: string = "";


  checkoutForm = this.formBuilder.group({
    answer: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
  ) {
  }

  ngOnInit(): void {
    this.getAnswers();
  }


  displayQuestion(index: number) {


    return this.question;
  }

  private getAnswers() {
    this.questionService.getAnswers()
      .subscribe(answers => this.answers = answers)
    this.questionService.getQuestions()
      .subscribe(question => this.questions = question);
  }

  onSubmit(): void {

    console.log("submitted")

    const answerText = JSON.stringify(this.checkoutForm.value)

    if (!answerText)
      return;
    this.questionService.addAnswer({answerText} as Answer).subscribe(answer => {
      this.answers.push(answer);
    });
    console.log(this.answers.length)


  }

}

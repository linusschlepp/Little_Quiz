import { Component,  Input,  OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/question';
import { Answer } from 'src/app/answer';
import { ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit, AfterContentChecked {

  questions: Question[] = []
  answers: Answer[] = []
  trueCounter: number = 0;
  questions1: Question[] = []



  constructor(
    private questionService: QuestionService,
    private cd: ChangeDetectorRef,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSize()
    this.getScore()
    this._route.params.subscribe(params => {
        this.questions1 = params['questions'];
    });
  }



  ngAfterContentChecked(): void {
      this.cd.detectChanges();
  }



  evaluate(index: number): boolean {

    try{
    const answer: Answer = this.answers[index+1];
 /*    const temp = answer.answerText.split("{")[0];
    this.questions.forEach(question => {
      if(question.questionText === temp)
          this.questions1[index].answer = question.answer
    }) */

     for(let i = 0; i < this.questions.length; i++){
       if(answer.answerText === this.questions[i].answerAndQuestion){
         this.questions1[index].answer = this.questions[i].answer;
             this.trueCounter += 1;
             console.log(this.trueCounter)
             return true;
       }
     }
    } catch(e){
      this.checkIfEmpty(index);
    }

   // this.questions1.forEach(e => console.log("question " +e.answer));
    return false;
  }


  checkSize(): boolean {

    if (this.answers.length-1 === 0)
      return false;


    return true;
  }

  checkIfEmpty(index: number): boolean {


    if (!this.answers[index+1] || this.answers[index+1] === undefined)
      return true;

    return false;

  }

  getSize(): void{
    this.questionService.getQuestions().subscribe(questions => this.questions = questions);
    this.questionService.getAnswers().subscribe(answer => this.answers = answer);
  }


  getAnswer(index: number): string {

    return JSON.stringify(this.questions[index].answer)

  }

  clear() {

    for(let i = 1; i < this.answers.length; i+=1)
      this.questionService.deleteAnswer(this.answers[i].id).subscribe();
    

   // this.answers.forEach(answer => this.questionService.deleteAnswer(answer.id).subscribe());
    this.questionService.getAnswers().subscribe(answer => this.answers = answer);
    

  }

  getScore(): string {

    const score = this.trueCounter/this.questions.length;

    if(score === 1)
      return "Legend";
    else if(score < 1 && score >= 0.8)
      return "Genius";
    else if(score < 0.8 && score >= 0.6)
      return "Intelligent!";
    else if(score < 0.6 && score >= 0.4)
      return "Semi Intelligent";
    else if(score < 0.4 && score >= 0.2)
      return "Stupid";
    else
      return "Bruh";
  }


}






import { Component,  OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/question';
import { Answer } from 'src/app/answer';
import { ChangeDetectorRef, AfterContentChecked } from '@angular/core';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit, AfterContentChecked {

  questions: Question[] = []
  answers: Answer[] = []
  trueCounter: number = 0;



  constructor(
    private questionService: QuestionService,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getSize()
    this.getScore()
  }



  ngAfterContentChecked(): void {
      this.cd.detectChanges();
  }



  evaluate(index: number): boolean {
    try{
    const answer: Answer = this.answers[index+1];

  /*   this.answers.forEach( a =>{
      console.log(a.answerText + " "+ a.id)
    }); */



     for(let i = 0; i < this.answers.length; i++){
       if(answer.answerText === this.questions[i].answerAndQuestion){
         console.log("Frage id: "+this.questions[i].answerAndQuestion)
         console.log("Meine Antwort "+answer.answerText)
         console.log("Richtige Antwort"+this.questions[i].answer)
        //   if('{"answer":"' + this.questions[i].answer + '"}' === answer.answerText) {
             this.trueCounter += 1;
             console.log(this.trueCounter)
             return true;
        //   }
       }
     }
    } catch(e){
      this.checkIfEmpty(index);
    }

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

    for(let i = 1; i < this.answers.length; i+=1){
      this.questionService.deleteAnswer(this.answers[i].id).subscribe();
    }
    this.questionService.getAnswers().subscribe(answer => this.answers = answer);
    console.log("length" +this.answers.length)

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






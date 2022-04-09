import { Component,  Input,  OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/question';
import { Answer } from 'src/app/answer';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  questions: Question[] = []
  answers: Answer[] = []
  trueCounter: number = 0;
  questionAnswers: Question[] = []



  constructor(
    private questionService: QuestionService,
    private cd: ChangeDetectorRef,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSize()
    this.getScore()
  }


  evaluate(index: number): boolean {

    try{


    const answer: Answer = this.answers[index+1];

   const temp = answer.answerText.split("{")[0];

    this.questions.forEach(question => {
      if(question.questionText === temp)
          this.questionAnswers.push(question);
    });


     for(let i = 0; i < this.questions.length; i++){
       if(answer.answerText == this.questions[i].answerAndQuestion){
             this.trueCounter += 1;
             return true;
       }
     }


    } catch(e){
      console.log(e)
      this.checkIfEmpty(index);
    }

    return false;
  }


  checkSize(): boolean {

    return this.answers.length - 1 !== 0;

  }

  checkIfEmpty(index: number): boolean {


    return !this.answers[index + 1] || this.answers[index + 1] === undefined;

  }

  getSize(): void{
    this.questionService.getQuestions().subscribe(questions => this.questions = questions);
    this.questionService.getAnswers().subscribe(answer => this.answers = answer);
  }


  getAnswer(index: number): string {

    return JSON.stringify(this.questionAnswers[index].answer)

  }

  clear() {

    for(let i = 1; i < this.answers.length; i+=1)
      this.questionService.deleteAnswer(this.answers[i].id).subscribe();


    this.questionService.getAnswers().subscribe(answer => this.answers = answer);
    this.questionService.shuffle();

  }

  getScore(): number {

    return this.trueCounter/this.getMaxSize();
  }

  getMaxSize(): number {

    return this.questionService.getRanIndeces().length;
  }


}






import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { QuestionComponent } from '../question/question.component';
import { QUESTIONS } from 'src/app/mock-questions';
import { Question } from 'src/app/question';
import { Answer } from 'src/app/answer';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  questions: Question[] = []
  answers: Answer[] = []
  value: string =""
  @Input()
  answerArray: string[] = []

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getSize()
  }


 
  evaluate(index: number): boolean {

      try{
    if('{"answer":"' + this.questions[index].answer + '"}' === this.answers[index+1].answerText)
      return true;
    } catch(e){
      this.checkIfEmpty(index);
    }

    return false;
  }

  checkSize(): boolean {

    if (this.questions.length === 0)
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

    QuestionService.values = []
  }

  setLastVisited() {

    QuestionService.lastVisited = "//evaluation"

  }
}






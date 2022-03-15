import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { QuestionComponent } from '../question/question.component';
import { QUESTIONS } from 'src/app/mock-questions';
import { Question } from 'src/app/question';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  questions: Question[] = []
  answers: string[] = []

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
  }


  printStuff(list: boolean[]) {

  }

  evaluate(index: number): boolean {


   // if ('{"answer":"' + QUESTIONS[index].answer + '"}' == JSON.stringify(QuestionService.values[index]))
    //  return true;


    this.questionService.getQuestions()
        .subscribe(question => this.questions = question);
    this.questionService.getAnswers()
        .subscribe(answers => this.answers = answers);

    
    if(this.questions[index].answer == this.answers[index])
      return true;


    return false;
  }

  checkSize(): boolean {

   // if (QuestionService.values.length == 0)
   //   return false;
   console.log(this.questionService.getAnswers.length);
    if (this.questionService.getAnswers.length == 0)
      return false;


    return true;
  }

  checkIfEmpty(index: number): boolean {




    if (!QuestionService.values[index]) {
      return true;
    }


    return false;

  }

  getSize(): Question[]{
    this.questionService.getQuestions().subscribe(questions => this.questions = questions);
    return this.questions
  }
  getAnswer(index: number): string {

    return JSON.stringify(QUESTIONS[index].answer)

  }

  clear() {

    QuestionService.values = []
  }

  setLastVisited() {

    QuestionService.lastVisited = "//evaluation"

  }
}






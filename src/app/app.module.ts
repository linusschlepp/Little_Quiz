import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuestionComponent } from './components/question/question.component';
import { HeaderComponent } from './components/header/header.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataQuestionsService } from './in-memory-data-questions.service';
import { InMemoryDataAnswersService } from './in-memory-data-answers.service';

const appRoutes: Routes = [
  
    {path: '', component: HeaderComponent},
    {path: 'about', component: AboutComponent},
    {path: 'question', component: QuestionComponent},
    {path: 'question-item', component: QuestionItemComponent},
    {path: 'evaluation', component: EvaluationComponent},
    
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ButtonComponent,
    AboutComponent,
    FooterComponent,
    QuestionComponent,
    HeaderComponent,
    QuestionItemComponent,
    EvaluationComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes, {enableTracing: true} ),
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataQuestionsService, 
      {dataEncapsulation: false} 
      ),
 /*    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataAnswersService, {
          dataEncapsulation: false}
      )  */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { RequesterService } from './requester.service';
import { map, catchError } from 'rxjs/operators';
import { Response } from 'app/models/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  politiciens = ()=> "politiciens";
  questions = ()=> "questions";
  politicien = (_)=> `politicien/${_}`;
  question = (_)=> `question/${_}`;
  constructor( private http: RequesterService) { }
  getPoliticiens(){
    const api = {
      method: 'GET',
      url: this.politiciens()
    };
    return this.http.request(api, null).pipe(
      map(response => ({
        content: response as Response
      }))
    );
  }
  getQuestions(){
    const api = {
      method: 'GET',
      url: this.questions()
    };
    return this.http.request(api, null).pipe(
      map(response => ({
        content: response as Response
      }))
    );
  }
  getPoliticien(id){
    const api = {
      method: 'GET',
      url: this.politicien(id)
    };
    return this.http.request(api, null).pipe(
      map(response => ({
        content: response as Response
      }))
    );
  }
  getQuestion(id){
    const api = {
      method: 'GET',
      url: this.question(id)
    };
    return this.http.request(api, null).pipe(
      map(response => ({
        content: response as Response
      }))
    );
  }
}

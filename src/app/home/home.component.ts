import { Component, OnInit } from '@angular/core';
import { Politicien, Question } from 'app/models/model';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  politiciens:Politicien[] = [{"_id":"5e5fdc747452940f589611fc","prenom":"Emmanuel","nom":"Macron","age":80, "note":6.5}
  ,{"_id":"5e6136dfa79d50121457fa1b","prenom":"Barrack","nom":"Obama","age":55,"parti":"Démocrate","note":3,"url_photo":"www.example.com"}
  ,{"_id":"5e76f8ad1c9d440000ae1bf9","prenom":"Joe","nom":"Biden","age":70,"note":4.5,"url_photo":"https://upload.wikimedia.org/wikipedia/commons/2/20/Joe_Biden_official_portrait_2013_cropped.jpg?uselang=fr"}
  ,{"_id":"5e76f8ad1c9d440000ae1bf9","prenom":"Joe","nom":"Biden","age":70,"note":4.5,"url_photo":"https://upload.wikimedia.org/wikipedia/commons/2/20/Joe_Biden_official_portrait_2013_cropped.jpg?uselang=fr"}
  ,{"_id":"5e76f8ad1c9d440000ae1bf9","prenom":"Joe","nom":"Biden","age":70,"note":4.5,"url_photo":"https://upload.wikimedia.org/wikipedia/commons/2/20/Joe_Biden_official_portrait_2013_cropped.jpg?uselang=fr"}
  ,{"_id":"5e76f8ad1c9d440000ae1bf9","prenom":"Joe","nom":"Biden","age":70,"note":4.5,"url_photo":"https://upload.wikimedia.org/wikipedia/commons/2/20/Joe_Biden_official_portrait_2013_cropped.jpg?uselang=fr"}
];
  questions:Question[];
  constructor(private api : ApiService) { }

  ngOnInit() {
    this.api.getPoliticiens().subscribe(_=>{
     // this.politiciens = (_.content.rows) as Politicien[];
    })
    this.api.getQuestions().subscribe(_=>{
      this.questions = (_.content.rows) as Question[];
    })
  }

}

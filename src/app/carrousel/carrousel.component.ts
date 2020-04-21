import { Component, OnInit, Input } from '@angular/core';
import { Politicien } from '../models/model';
import { ApiService } from 'app/services/api.service';
import { UtilsService } from 'app/services/utils.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  errorMessage:boolean;
  slides = [
    {img: "http://placehold.it/350x150/000000", nom:'Sarkozy', prenom:'Nicolas'},
    {img: "http://placehold.it/350x150/111111", nom:'Chirac', prenom:'Jacques'},
    {img: "http://placehold.it/350x150/333333", nom:'Giscard d\'estaing', prenom:'Valérie'},
    {img: "http://placehold.it/350x150/666666", nom:'Balladur', prenom:'Nicolas'}
  ];
  slideConfig = {"slidesToShow": 6, "slidesToScroll": 3, "autoplay": true,
  "autoplaySpeed": 5000, "infinite": true};
  @Input()
  items: Politicien[];
  constructor(private api: ApiService, private utils:UtilsService) {

    this.utils.carouselRefresh.subscribe(_=> this.slideConfig = {"slidesToShow": this.utils.maxSlide, "slidesToScroll": 3, "autoplay": true,
    "autoplaySpeed": 5000, "infinite": true});

  }

  ngOnInit() {
    this.slideConfig = {"slidesToShow":  this.utils.maxSlide, "slidesToScroll": 3, "autoplay": true,
  "autoplaySpeed": 5000, "infinite": true};
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}

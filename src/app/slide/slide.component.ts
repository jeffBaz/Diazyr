import { Component, OnInit, Input, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { UtilsService } from 'app/services/utils.service';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input() slide;
  disabled = false;
  value = Math.round(Math.random()*10);
  icon: boolean;
  constructor(private router: Router, private utils:UtilsService) { }

  ngOnInit() {


  }

  showIcon(){
    this.icon = true;
  }
  detail(){
    this.utils.selectedPoliticien = this.slide;
    this.router.navigate(['/polliticien', this.slide._id])
  }
}

import { Component, OnInit } from '@angular/core';
import { Menu } from 'app/models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  menus: Menu[];
  constructor(private router: Router) {
    this.menus = [{
      icon:"home",
      action:()=>this.router.navigate(['/'])
    },{
      icon:"account_circle",
      action:()=>this.router.navigate(['/login'])

    },{
      icon:"trending_up",
      action:()=>this.router.navigate(['/polliticiens'])

    },{
      icon:"account_balance",

    },{
      icon:"question_answer",
      action:()=>this.router.navigate(['/questions'])

    }, ]
   }

  ngOnInit() {
  }

}

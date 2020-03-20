import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  toggleEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.toggleEvent.emit();
  }

}

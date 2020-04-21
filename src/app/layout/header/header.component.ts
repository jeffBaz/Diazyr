import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  toggleEvent: EventEmitter<void> = new EventEmitter();
  logged = false;
  constructor(private router: Router, private auth: AuthService) {
   this.auth.logged.subscribe(_=>this.logged = _);
  }
  logIn() {
    //this.auth.login();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }
  toggle() {
    this.toggleEvent.emit();
  }
  home(){
    this.router.navigate(['/']);
  }
}

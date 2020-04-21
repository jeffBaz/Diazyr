import { Component, OnInit, HostListener } from '@angular/core';
import { UtilsService } from "../services/utils.service";
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  errorMessage:string;
  constructor( private utils:UtilsService) { }

  ngOnInit() {
    this.resetTunnel({target:{innerWidth:document.body.clientWidth}});
  }
  @HostListener('window:resize', ['$event'])
  resetTunnel(e){
    const w =  e.target.innerWidth;
    if( w<600){
      this.utils.maxSlide = 2
    }else if( w<900){
      this.utils.maxSlide = 3
    }else
    if( w>1500){
      this.utils.maxSlide = 9
    }else {
      this.utils.maxSlide = 6
    }
    this.utils.carouselRefresh.next();
  }
}

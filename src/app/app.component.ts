import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public translate: TranslateService, private domSanitizer: DomSanitizer) {
    translate.addLangs(['en', 'fr']);
    const browserLang = translate.getBrowserLang();
    translate.use('fr');
  }
}

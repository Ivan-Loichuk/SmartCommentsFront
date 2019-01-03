import {Component} from "@angular/core";
import {TranslateService} from 'ng2-translate';
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: 'ze-app',
    templateUrl: 'dev/app.component.html',
})
export class AppComponent {

  constructor(private translate: TranslateService,
              private router: Router) {
    translate.addLangs(['en', 'pl', 'ua', 'ru']);
    translate.setDefaultLang('en');
    const lang = localStorage.getItem('lang');
    if(lang) {
      translate.use(lang);
    }
  }
}

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConst } from 'src/app/consts/app-const';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(private translate: TranslateService) { }

  getDefaultLanguage(){
    // let language = this.translate.getBrowserLang();
    let language = AppConst.APP_KHMER_LANGUAGE_KEY;
    this.translate.setDefaultLang(language);
    return language;
  }

  setLanguage(lang) {
    this.translate.use(lang);
  }

}

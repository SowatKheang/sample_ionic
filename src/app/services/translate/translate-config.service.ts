import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConst } from 'src/app/consts/app-const';
import { StorageService } from '../storages/storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(private translate: TranslateService, private storageService: StorageService) { }

  async getDefaultLanguage() {
    let language = await this.storageService.get(AppConst.APP_LANGUAGE_KEY);
    if (language === null) {
      language = AppConst.APP_KHMER_LANGUAGE_KEY;
    }
    return language;
  }

  /**
   * 
   * @param lang 
   */
  setLanguage(lang: string) {
    this.translate.use(lang);
  }

}

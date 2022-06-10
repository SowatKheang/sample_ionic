import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppConst } from 'src/app/consts/app-const';
import { ConnectivityService } from 'src/app/services/network/connectivity.service';
import { StorageService } from 'src/app/services/storages/storage-service.service';
import { TranslateConfigService } from 'src/app/services/translate/translate-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  dropdown = false;
  isEn = false;
  selectedLanguage: string;
  isDesktop = false;

  @ViewChild('productbtn', { read: ElementRef })productbtn: ElementRef;

  constructor(
    private platform: Platform,
    private translateConfigService: TranslateConfigService,
    private storageService: StorageService,
    private connectivity: ConnectivityService,
  ) { 
    this.isDesktop = this.platform.is('desktop');
  }

  async ngOnInit() {
    this.selectedLanguage = await this.translateConfigService.getDefaultLanguage();
    if (this.selectedLanguage === AppConst.APP_ENGLISH_LANGUAGE_KEY) {
      this.isEn = true;
    }
  }

  hideDropdown(event) {
    const xTouch = event.clientX;
    const yTouch = event.clientY;
    
    const rect = this.productbtn.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top + 2;
    const leftBoundary = rect.left + 2;
    const rightBoundary = rect.right - 2;

    if (xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary) {      
      this.dropdown = false;
    }
  }

  useLanguage() {
    this.isEn = !this.isEn;
    this.translateConfigService.setLanguage(this.isEn ? AppConst.APP_ENGLISH_LANGUAGE_KEY : AppConst.APP_KHMER_LANGUAGE_KEY);
    this.storageService.set(AppConst.APP_LANGUAGE_KEY, this.isEn ? AppConst.APP_ENGLISH_LANGUAGE_KEY : AppConst.APP_KHMER_LANGUAGE_KEY);
  } 

}


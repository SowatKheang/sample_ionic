import { Component, HostListener, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { MenuController, Platform } from '@ionic/angular';
import { AppConst } from './consts/app-const';
import { ConnectivityService } from './services/network/connectivity.service';
import { StorageService } from './services/storages/storage-service.service';
import { TranslateConfigService } from './services/translate/translate-config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  isDesktop = false;
  public selectedIndex = 0;

  // side_menus: any;

  // constructor(private platform: Platform) {
  //   this.sideMenu(); 
  //   this.platform.ready().then(()=> {
  //     StatusBar.setBackgroundColor({
  //       color: '#2dd36f'
  //     });
  //   });
  // }

  menu_items = [
    {
      title: 'home',
      icon: 'home',
      path: '/'
    },
    {
      title: 'product',
      icon: 'list',
      path: '/products'
    },
    {
      title: 'about',
      icon: 'information-circle',
      path: '/about'
    },
    {
      title: 'contact',
      icon: 'call',
      path: '/contact'
    },
    { 
      title : 'logout',  
      url   : '/logout',  
      icon  : 'exit'  
    }
  ];

  title = 'Home';

  constructor(
    private menuCtrl: MenuController, 
    private platform: Platform, 
    private translateConfigService: TranslateConfigService,
    private storageService: StorageService,
    private connectivity: ConnectivityService,
  ) {
    this.isDesktop = this.platform.is('desktop');
    if (!this.isDesktop) {
      this.platform.ready().then(()=> {
        StatusBar.setBackgroundColor({
          color: '#E1E7E4'
        });
      });
    }
    this.initializeApp();
  }

  async ngOnInit() {
    // const width = this.platform.width();
    // this.toggleMenu(width);
    // const path = window.location.pathname.split('/')[1];
    // console.log(path)
    // if (path !== undefined) {
    //   this.selectedIndex = this.menu_items.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
    await this.connectivity.openCheckNetwork();
    await this.connectivity.logNetworkState();
  }

  // @HostListener('window:resize', ['$event'])
  // private onResize(event) {
  //   const newWidth = event.target.innerWidth;
  //   this.toggleMenu(newWidth);
  // }

  // toggleMenu(width) {
  //   if (width > 768) {
  //     this.menuCtrl.enable(false, 'myMenu');
  //   } else {
  //     this.menuCtrl.enable(true, 'myMenu');
  //   }
  // }

  // setTitle(title) {
  //   this.title = title
  // }

  async initializeApp() {
    let lang = await this.storageService.get(AppConst.APP_LANGUAGE_KEY);
    if (lang === null || lang === '' || lang === undefined) {
      lang = AppConst.APP_KHMER_LANGUAGE_KEY;
    }
    await this.storageService.set(AppConst.APP_LANGUAGE_KEY, lang);
    this.translateConfigService.setLanguage(lang);
  }

}

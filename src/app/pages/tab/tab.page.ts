import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AbstractPage } from '../base/abstract.page';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage extends AbstractPage {
  
  constructor(private _platform: Platform) {
    super(_platform);  
  }
  
  onInit(): void {

  }

  bottom_nav_bars = [
    { name: 'home', route: 'home', icon: 'home' },
    { name: 'map', route: 'map', icon: 'map' },
    { name: 'about', route: 'about', icon: 'information-circle' },
    { name: 'notification', route: 'notification', icon: 'notifications' },
  ];

}

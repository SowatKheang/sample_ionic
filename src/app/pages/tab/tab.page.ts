import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  isDesktop = false;

  constructor(private platform: Platform) { }

  ngOnInit() {
    this.isDesktop = this.platform.is('desktop');
  }

  bottom_nav_bars = [
    { name: 'home', route: 'home', icon: 'home' },
    { name: 'map', route: 'map', icon: 'map' },
    { name: 'about', route: 'about', icon: 'information-circle' },
    { name: 'notification', route: 'notification', icon: 'notifications' },
  ];

}

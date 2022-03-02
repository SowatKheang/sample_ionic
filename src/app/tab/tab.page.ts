import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  isDesktop = false;

  constructor(private platform: Platform) { 
  }

  ngOnInit() {
    this.isDesktop = this.platform.is('desktop');
  }

  bottom_nav_bars = [
    { name: 'Home', route: 'home', icon: 'home' },
    { name: 'Map', route: 'map', icon: 'map' },
    { name: 'About', route: 'about', icon: 'information-circle' },
    { name: 'Notification', route: 'notification', icon: 'notifications' },
  ];

}

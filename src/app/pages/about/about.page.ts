import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AbstractPage } from '../base/abstract.page';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})

export class AboutPage extends AbstractPage {
  
  constructor(private _platform: Platform) { 
    super(_platform);
  }
  
  onInit(): void {
    this.setTitle('about');
  }

}

import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AbstractPage } from '../base/abstract.page';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage extends AbstractPage {
  
  constructor(private _platform: Platform) {
    super(_platform);
  }

  onInit(): void {
    this.setTitle('contact');
  }

}

import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AbstractPage } from '../base/abstract.page';

@Component({
  selector: 'app-contact',
  // templateUrl: './contact.page.html',
  // styleUrls: ['./contact.page.÷scs÷s'],
  templateUrl: './contact_page_2.html',
  styleUrls: ['./contact_page_2.scss'],
})
export class ContactPage extends AbstractPage {
  
  constructor(private _platform: Platform) {
    super(_platform);
  }

  onInit(): void {
    this.setTitle('contact');
  }

}

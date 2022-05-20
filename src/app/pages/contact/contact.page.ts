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

  contactFormModel: ContactFormModel = { name: '', email: '', phone: '', message: '' };
  
  constructor(private _platform: Platform) {
    super(_platform);
  }

  onInit(): void {
    this.setTitle('contact');
  }

  public onSendMessage(): void {
    let msg = 'Name: ' + this.contactFormModel.name + ' Email: ' + this.contactFormModel.email + 
      ' phone: ' + this.contactFormModel.phone + ' Message: ' + this.contactFormModel.message;
    console.log(msg);
    alert(msg);
  }

}

interface ContactFormModel {
  name: string;
  email: string;
  phone: string;
  message: string;
}
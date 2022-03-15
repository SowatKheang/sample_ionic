import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  isDesktop = false;
  title = 'contact';

  constructor(private platform: Platform) { 
    this.isDesktop = this.platform.is('desktop');
  }

  ngOnInit() {
    
  }

  setTitle(title) {
    this.title = title
  }

}

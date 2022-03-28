import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  private isDesktop: boolean = false;

  constructor(private platform: Platform) { 
    this.isDesktop = this.platform.is('desktop');
  }

  ngOnInit() {
    
  }

}

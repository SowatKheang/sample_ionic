import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AbstractPage } from 'src/app/pages/base/abstract.page';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent extends AbstractPage {
  
  constructor(private _platform: Platform) {
    super(_platform);
  }
  
  onInit(): void {

  }
  
}

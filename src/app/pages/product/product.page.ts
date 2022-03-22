import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpService } from 'src/app/services/http/http.service';
import { AbstractPage } from '../base/abstract.page';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage extends AbstractPage {

  constructor(private _platform: Platform, private http: HttpService) {
    super(_platform);
  }

  onInit(): void {
    this.setTitle('product');
  }

}

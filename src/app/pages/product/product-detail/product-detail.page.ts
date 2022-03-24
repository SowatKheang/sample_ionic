import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpService } from 'src/app/services/http/http.service';
import { AbstractPage } from '../../base/abstract.page';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage extends AbstractPage {

  constructor(private _platform: Platform, private http: HttpService) {
    super(_platform);
  }

  onInit(): void {
    this.setTitle('product.detail');
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { HttpService } from 'src/app/services/http/http.service';
import { AbstractPage } from '../../base/abstract.page';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage extends AbstractPage {

  productId: number;

  constructor(private _platform: Platform, private http: HttpService, private route: ActivatedRoute) {
    super(_platform);
  }

  onInit(): void {
    this.setTitle('product.detail');

    this.route.paramMap.subscribe(data => {
      if (data && data['params']) {
        this.productId = data['params'].id;
        console.log(this.productId);
      }
    });

  }

}

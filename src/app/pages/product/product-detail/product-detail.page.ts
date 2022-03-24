import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CloudFirestoreService } from 'src/app/services/cloud-firestore/cloud-firestore.service';
import { HttpService } from 'src/app/services/http/http.service';
import { AbstractPage } from '../../base/abstract.page';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage extends AbstractPage {

  productId: number;

  datas: any;

  constructor(
    private _platform: Platform, 
    private http: HttpService,
    private route: ActivatedRoute,
    private cloudFirestoreService: CloudFirestoreService
  ) {
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

    this.cloudFirestoreService.getData().subscribe(res => {
      this.datas = res as string[];
    });

  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { CloudFirestoreService } from 'src/app/services/cloud-firestore/cloud-firestore.service';
import { AbstractPage } from '../../base/abstract.page';
import { Product } from '../../../ngxs/product/action';
import { ProductModel } from '../../../ngxs/product/state';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage extends AbstractPage {

  productId: number;
  product: ProductModel;
  datas: any;

  constructor(
    private _platform: Platform, 
    private route: ActivatedRoute,
    private cloudFirestoreService: CloudFirestoreService,
    private store: Store,
  ) {
    super(_platform);
  }

  onInit(): void {
    this.setTitle('product.detail');

    this.route.paramMap.subscribe(data => {
      if (data && data['params']) {
        this.productId = data['params'].id;
        // Convert string to number add + before it
        this.store.dispatch(new Product.GetItem(+this.productId)).subscribe((_) => {
          this.getProduct();
        });
      }
    });

    this.cloudFirestoreService.getData().subscribe(res => {
      this.datas = res as string[];
    });

  }

  public getProduct() {
    this.product = this.store.selectSnapshot(
      (state) => {
        return state.ProductState.product;
      }
    );
  }

}

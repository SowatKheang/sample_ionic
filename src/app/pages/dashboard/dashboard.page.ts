import { Component, ViewEncapsulation } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { Product } from 'src/app/ngxs/product/action';
import { ProductInfo } from 'src/app/ngxs/product/state';
import { HttpService } from 'src/app/services/http/http.service';
import { AbstractPage } from '../base/abstract.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardPage extends AbstractPage {

  productList: ProductInfo;

  public columns: any;
  public rows: any;

  constructor(
    private _platform: Platform, 
    private http: HttpService,
    private store: Store,
  ) {
    super(_platform);
    
    this.columns = [
      { name: 'Id'},
      { name: 'Photo' },
      { name: 'Description' },
      { name: 'Description En' },
      { name: 'Status' },
    ];
  
  }

  ionViewWillEnter(): void {
    this.store.dispatch(new Product.GetAll()).subscribe((_) => {
      this.getProducts();
    });
  }

  getProducts(): void {
    this.productList = this.store.selectSnapshot(
      (state) => {
        this.rows = state.ProductState.products;
        return state.ProductState.products;
      }
    );
  }

  onInit(): void {
    this.setTitle('Dashboard');
  }

}

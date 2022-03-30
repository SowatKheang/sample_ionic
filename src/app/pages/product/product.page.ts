import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { HttpService } from 'src/app/services/http/http.service';
import { AbstractPage } from '../base/abstract.page';
import { ProductState, ProductListModel } from '../../ngxs/product/state';
import { Product } from '../../ngxs/product/action';
import { CategoryState, CategoryListModel } from '../../ngxs/category/state';
import { Category } from '../../ngxs/category/action';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage extends AbstractPage {

  categories = [];
  products = [];
  productList: ProductListModel;
  categoryList: CategoryListModel;

  constructor(
    private _platform: Platform, 
    private http: HttpService,
    private store: Store,
  ) {
    super(_platform);
  }
  
  ionViewWillEnter(): void {
    this.store.dispatch(new Product.GetAll()).subscribe((_) => {
      this.getProducts();
    });

    this.store.dispatch(new Category.GetAll()).subscribe((_) => {
      this.getCategories();
    });

  }

  onInit(): void {
    this.setTitle('product');

    // this.categories = [
    //   { desc: 'Men\'s', descEn: 'Men\'s'},
    //   { desc: 'Women\'s', descEn: 'Women\'s'},
    //   { desc: 'Clothing', descEn: 'Clothing'},
    //   { desc: 'Shoes', descEn: 'Shoes'},
    //   { desc: 'Accessories', descEn: 'Accessories'},
    // ];

    // this.products = [
    //   { id: 1, desc: "Logn Sleeve Leopard T-Shirt", price: "$250", photo: "https://templates.hibootstrap.com/xton/default/assets/img/products/img1.jpg" },
    //   { id: 2, desc: "Gildan Men's Crew T-Shirt", price: "$150", photo: "https://templates.hibootstrap.com/xton/default/assets/img/products/img4.jpg" },
    //   { id: 3, desc: "Open Front Knit Swaters", price: "$200", photo: "https://templates.hibootstrap.com/xton/default/assets/img/products/img9.jpg" },
    //   { id: 4, desc: "Hanes Men's Pullover", price: "$200", photo: "https://templates.hibootstrap.com/xton/default/assets/img/products/img3.jpg" },
    // ];

    // this.getProduct();
    // this.getCategory();

  }

  async getCategory() {
    await this.http.get(this.http.categoryApi, null).subscribe((res)=> {
      this.categories = res['data'];
      console.log(this.categories);
    });
  }

  async getProduct() {
    await this.http.get(this.http.productApi, null).subscribe((res)=> {
      this.products = res['data'];
      console.log(this.products);
    });
  }

  doRefresh(event): void {
    setTimeout(() => {
      this.getProducts();
      event.target.complete();
      // this.getProduct().then(()=> {
      //   event.target.complete();
      // });
    }, 1000);
  }

  getProducts(): void {
    this.productList = this.store.selectSnapshot(
      (state) => {
        return state.ProductState.products;
      }
    );
  }

  getCategories(): void {
    this.categoryList = this.store.selectSnapshot(
      (state) => {
        return state.CategoryState.categories;
      }
    );
  }

}

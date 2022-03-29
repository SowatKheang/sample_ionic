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

  categories = [];
  products = [];

  constructor(private _platform: Platform, private http: HttpService) {
    super(_platform);
  }

  onInit(): void {
    this.setTitle('product');

    this.categories = [
      { desc: 'Men\'s', descEn: 'Men\'s'},
      { desc: 'Women\'s', descEn: 'Women\'s'},
      { desc: 'Clothing', descEn: 'Clothing'},
      { desc: 'Shoes', descEn: 'Shoes'},
      { desc: 'Accessories', descEn: 'Accessories'},
    ];
    
    this.getProduct();

    // this.products = [
    //   { id: 1, desc: "Logn Sleeve Leopard T-Shirt", price: "$250", photo: "https://templates.hibootstrap.com/xton/default/assets/img/products/img1.jpg" },
    //   { id: 2, desc: "Gildan Men's Crew T-Shirt", price: "$150", photo: "https://templates.hibootstrap.com/xton/default/assets/img/products/img4.jpg" },
    //   { id: 3, desc: "Open Front Knit Swaters", price: "$200", photo: "https://templates.hibootstrap.com/xton/default/assets/img/products/img9.jpg" },
    //   { id: 4, desc: "Hanes Men's Pullover", price: "$200", photo: "https://templates.hibootstrap.com/xton/default/assets/img/products/img3.jpg" },
    // ];

  }

  async getProduct() {
    await this.http.get(this.http.productApi, null).subscribe((res)=> {
      this.products = res['data'];
      console.log(this.products);
    });
  }

  doRefresh(event): void {
    setTimeout(() => {
      this.getProduct().then(()=> {
        event.target.complete();
      });
    }, 1000);
  }

}

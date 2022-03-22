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
    
    this.products = [
      { desc: "Logn Sleeve Leopard T-Shirt", price: "$250", image_url: "https://templates.hibootstrap.com/xton/default/assets/img/products/img1.jpg" },
      { desc: "Gildan Men's Crew T-Shirt", price: "$150", image_url: "https://templates.hibootstrap.com/xton/default/assets/img/products/img4.jpg" },
      { desc: "Open Front Knit Swaters", price: "$200", image_url: "https://templates.hibootstrap.com/xton/default/assets/img/products/img9.jpg" },
      { desc: "Hanes Men's Pullover", price: "$200", image_url: "https://templates.hibootstrap.com/xton/default/assets/img/products/img3.jpg" },
    ];

  }

}

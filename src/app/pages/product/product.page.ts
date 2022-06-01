import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { HttpService } from 'src/app/services/http/http.service';
import { AbstractPage } from '../base/abstract.page';
import { ProductInfo } from '../../ngxs/product/state';
import { Product } from '../../ngxs/product/action';
import { CategoryListModel } from '../../ngxs/category/state';
import { Category } from '../../ngxs/category/action';
import { PreLoad } from 'src/app/decorators/preload';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
@PreLoad('ProductDetail')
export class ProductPage extends AbstractPage {

  // Static
  categories = [];
  products = [];
  brands = [];
  colors = [];
  sizes = [];

  selectedBrand = null;
  selectedColor = null;
  selectedCategory = null;
  selectedSize = null;

  // From API
  productList: ProductInfo;
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

    this.colors = [
        { desc: 'Black', class: 'color-black'},
        { desc: 'Red', class: 'color-red'},
        { desc: 'Yellow', class: 'color-yellow'},
        { desc: 'White', class: 'color-white'},
        { desc: 'Blue', class: 'color-blue'},
        { desc: 'Green', class: 'color-green'},
        { desc: 'Yellow Green', class: 'color-yellowgreen'},
        { desc: 'Pink', class: 'color-pink'},
        { desc: 'Violet', class: 'color-violet'},
        { desc: 'Blue Violet', class: 'color-blueviolet'},
        { desc: 'Lime', class: 'color-lime'},
        { desc: 'Plum', class: 'color-plum'},
        { desc: 'Teal', class: 'color-teal'},
    ];

    this.brands = [
        { desc: 'Gucci', descEn: 'Gucci'},
        { desc: 'Virgil Abloh', descEn: 'Virgil Abloh'},
        { desc: 'Balenciaga', descEn: 'Balenciaga'},
        { desc: 'Moncler', descEn: 'Moncler'},
        { desc: 'Fendi', descEn: 'Fendi'},
        { desc: 'Versace', descEn: 'Versace'},
    ];

    this.sizes = [
      { desc: '20', descEn: '20'},
      { desc: '24', descEn: '24'},
      { desc: '29', descEn: '29'},
      { desc: '30', descEn: '30'},
      { desc: '36', descEn: '36'},
      { desc: 'XS', descEn: 'XS'},
      { desc: 'S', descEn: 'S'},
      { desc: 'M', descEn: 'M'},
      { desc: 'L', descEn: 'L'},
      { desc: 'XL', descEn: 'XL'},
      { desc: '2XL', descEn: '2XL'},
  ];

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

  setSelectedBrand(brand){
    this.selectedBrand = brand;
  }

  setSelectedColor(color){
    this.selectedColor = color;
  }

  setSelectedCategory(category){
    this.selectedCategory = category;
  }

  setSelectedSize(size){
    this.selectedSize = size;
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

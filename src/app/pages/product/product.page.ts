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
        { id: 1, desc: 'Black', class: 'color-black'},
        { id: 2, desc: 'Red', class: 'color-red'},
        { id: 3, desc: 'Yellow', class: 'color-yellow'},
        { id: 4, desc: 'White', class: 'color-white'},
        { id: 5, desc: 'Blue', class: 'color-blue'},
        { id: 6, desc: 'Green', class: 'color-green'},
        { id: 7, desc: 'Yellow Green', class: 'color-yellowgreen'},
        { id: 8, desc: 'Pink', class: 'color-pink'},
        { id: 9, desc: 'Violet', class: 'color-violet'},
        { id: 10, desc: 'Blue Violet', class: 'color-blueviolet'},
        { id: 11, desc: 'Lime', class: 'color-lime'},
        { id: 12, desc: 'Plum', class: 'color-plum'},
        { id: 13, desc: 'Teal', class: 'color-teal'},
    ];

    this.brands = [
        { id: 1, desc: 'Gucci', descEn: 'Gucci'},
        { id: 2, desc: 'Virgil Abloh', descEn: 'Virgil Abloh'},
        { id: 3, desc: 'Balenciaga', descEn: 'Balenciaga'},
        { id: 4, desc: 'Moncler', descEn: 'Moncler'},
        { id: 5, desc: 'Fendi', descEn: 'Fendi'},
        { id: 6, desc: 'Versace', descEn: 'Versace'},
    ];

    this.sizes = [
      { id: 1, desc: '20', descEn: '20'},
      { id: 2, desc: '24', descEn: '24'},
      { id: 3, desc: '29', descEn: '29'},
      { id: 4, desc: '30', descEn: '30'},
      { id: 5, desc: '36', descEn: '36'},
      { id: 6, desc: 'XS', descEn: 'XS'},
      { id: 7, desc: 'S', descEn: 'S'},
      { id: 8, desc: 'M', descEn: 'M'},
      { id: 9, desc: 'L', descEn: 'L'},
      { id: 10, desc: 'XL', descEn: 'XL'},
      { id: 11, desc: '2XL', descEn: '2XL'},
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
    this.selectedBrand = this.selectedOption(this.selectedBrand, brand);
    console.log('<-- SELECTED BRAND : ' + (this.selectedBrand ? this.selectedBrand.desc : null));
  }

  setSelectedColor(color){
    this.selectedColor = this.selectedOption(this.selectedColor, color);
    console.log('<-- SELECTED COLOR : ' + (this.selectedColor ? this.selectedColor.desc : null));
  }

  setSelectedCategory(category){
    this.selectedCategory = this.selectedOption(this.selectedCategory, category);
    console.log('<-- SELECTED CATEGORY : ' + (this.selectedCategory ? this.selectedCategory.description : null));
  }

  setSelectedSize(size){
    this.selectedSize = this.selectedOption(this.selectedSize, size);
    console.log('<-- SELECTED SIZE : ' + (this.selectedSize ? this.selectedSize.desc : null));
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

  private selectedOption(selectOption, option) {
    if (selectOption && selectOption.id == option.id) {
      selectOption = null;
    } else {
      selectOption = option;
    }
    return selectOption;
  }

}

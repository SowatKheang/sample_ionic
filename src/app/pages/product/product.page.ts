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
        { id: 1, description: 'Black', class: 'color-black'},
        { id: 2, description: 'Red', class: 'color-red'},
        { id: 3, description: 'Yellow', class: 'color-yellow'},
        { id: 4, description: 'White', class: 'color-white'},
        { id: 5, description: 'Blue', class: 'color-blue'},
        { id: 6, description: 'Green', class: 'color-green'},
        { id: 7, description: 'Yellow Green', class: 'color-yellowgreen'},
        { id: 8, description: 'Pink', class: 'color-pink'},
        { id: 9, description: 'Violet', class: 'color-violet'},
        { id: 10, description: 'Blue Violet', class: 'color-blueviolet'},
        { id: 11, description: 'Lime', class: 'color-lime'},
        { id: 12, description: 'Plum', class: 'color-plum'},
        { id: 13, description: 'Teal', class: 'color-teal'},
    ];

    this.brands = [
        { id: 1, description: 'Gucci', descriptionEn: 'Gucci'},
        { id: 2, description: 'Virgil Abloh', descriptionEn: 'Virgil Abloh'},
        { id: 3, description: 'Balenciaga', descriptionEn: 'Balenciaga'},
        { id: 4, description: 'Moncler', descriptionEn: 'Moncler'},
        { id: 5, description: 'Fendi', descriptionEn: 'Fendi'},
        { id: 6, description: 'Versace', descriptionEn: 'Versace'},
    ];

    this.sizes = [
      { id: 1, description: '20', descriptionEn: '20'},
      { id: 2, description: '24', descriptionEn: '24'},
      { id: 3, description: '29', descriptionEn: '29'},
      { id: 4, description: '30', descriptionEn: '30'},
      { id: 5, description: '36', descriptionEn: '36'},
      { id: 6, description: 'XS', descriptionEn: 'XS'},
      { id: 7, description: 'S', descriptionEn: 'S'},
      { id: 8, description: 'M', descriptionEn: 'M'},
      { id: 9, description: 'L', descriptionEn: 'L'},
      { id: 10, description: 'XL', descriptionEn: 'XL'},
      { id: 11, description: '2XL', descriptionEn: '2XL'},
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
    this.selectedBrand = this.selectedOption('BRAND', this.selectedBrand, brand);
  }

  setSelectedColor(color) {
    this.selectedColor = this.selectedOption('COLOR', this.selectedColor, color);
  }

  setSelectedCategory(category) {
    this.selectedCategory = this.selectedOption('CATEGORY', this.selectedCategory, category);
  }

  setSelectedSize(size) {
    this.selectedSize = this.selectedOption('SIZE', this.selectedSize, size);
  }

  /**
   * The function is an asynchronous function that calls the get method of the http service and
   * subscribes to the response
   */
  async getCategory() {
    await this.http.get(this.http.categoryApi, null).subscribe((res)=> {
      this.categories = res['data'];
      console.log(this.categories);
    });
  }

  /**
   * The function is an asynchronous function that calls the get method of the http service and
   * subscribes to the response
   */
  async getProduct() {
    await this.http.get(this.http.productApi, null).subscribe((res)=> {
      this.products = res['data'];
      console.log(this.products);
    });
  }

  /**
   * The doRefresh() function is called when the user pulls down on the screen. It calls the
   * getProducts() function, which is the function that gets the data from the API. It then calls the
   * event.target.complete() function, which tells the app that the refresh is complete
   * @param event - The event that triggered the refresh.
   */
  doRefresh(event): void {
    setTimeout(() => {
      this.getProducts();
      event.target.complete();
      // this.getProduct().then(()=> {
      //   event.target.complete();
      // });
    }, 1000);
  }

  /**
   * The function gets the products from the store and assigns them to the productList variable
   */
  getProducts(): void {
    this.productList = this.store.selectSnapshot(
      (state) => {
        return state.ProductState.products;
      }
    );
  }

  /**
   * This function is used to get the list of categories from the store
   */
  getCategories(): void {
    this.categoryList = this.store.selectSnapshot(
      (state) => {
        return state.CategoryState.categories;
      }
    );
  }

  /**
   * If the selected option is the same as the option being selected, then set the selected option to
   * null. Otherwise, set the selected option to the option being selected
   * @param module - The module name, which is used to identify the module in the store.
   * @param selectOption - the current selected option
   * @param option - the option that was selected
   * @returns The selected option.
   */
  private selectedOption(module, selectOption, option) {
    if (selectOption && selectOption.id == option.id) {
      selectOption = null;
    } else {
      selectOption = option;
    }
    console.log(`<-- SELECTED ${module} : ` + (selectOption ? selectOption.description : null));
    return selectOption;
  }

}

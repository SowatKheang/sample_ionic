import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { map, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http/http.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from '../product/action';

/**
 * Model 
 */
export interface ProductModel {
    id: number;
    uuid: string;
    categoryId: number;
    inventoryId: number;
    discountId: number;
    description: string;
    descriptionEn: string;
    photo: string;
    price: number;
    status: number;
}

export interface ProductListModel {
    products: ProductModel[];
}

/**
 * State Class
 */
@State<ProductListModel>({
    name: 'ProductState',
    defaults: {
        products: null,
    },
})
@Injectable()
export class ProductState {

    constructor(private http: HttpService) {}

    @Action(Product.GetAll)
    public getProductList({ setState, getState }: StateContext<ProductListModel>) {
        return this.http.get(this.http.productApi, null).pipe((tap((res) => {
            const state = getState();
            console.log('<<<---Data : ' + res['data']);
            setState({
                ...state,
                products: res['data'],
            });
        })));
    }

}
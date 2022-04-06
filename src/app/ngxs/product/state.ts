import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
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

export interface ProductInfo {
    products: ProductModel[];
    product: ProductModel;
}

/**
 * State Class
 */
@State<ProductInfo>({
    name: 'ProductState',
    defaults: {
        products: null,
        product: null,
    },
})
@Injectable()
export class ProductState {

    constructor(private http: HttpService) { }

    @Selector()
    static getAllProduct(state: ProductInfo) {
        return state.products;
    }

    @Action(Product.GetAll)
    public getProductList({ setState, getState }: StateContext<ProductInfo>) {
        return this.http.get(this.http.productApi, null).pipe((tap((res) => {
            const state = getState();
            setState({
                ...state,
                products: res['data'],
            });
        })));
    }

    @Action(Product.GetItem)
    public getProductItem({ patchState, getState }: StateContext<ProductInfo>, { id } : Product.GetItem) {
        // return this.http.get(this.http.productApi + '/' + id, null).pipe((tap((res) => {
        //     const state = getState();
        //     setState({
        //         ...state,
        //         product: res['data'],
        //     });
        // })));
        
        return this.http.get(this.http.productApi + '/' + id, null).pipe(map((res: any) => {
            patchState({
                product: res['data'],
            });
        }));

    }

}

import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { map, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http/http.service';
import { Category } from '../category/action';

/**
 * Model 
 */
export interface CategoryModel {
    id: number;
    uuid: string;
    description: string;
    descriptionEn: string;
    photo: string;
    status: number;
}

export interface CategoryListModel {
    categories: CategoryModel[];
}

/**
 * State Class
 */
@State<CategoryListModel>({
    name: 'CategoryState',
    defaults: {
        categories: null,
    },
})
@Injectable()
export class CategoryState {

    constructor(private http: HttpService) {}

    @Action(Category.GetAll)
    public getProductList({ setState, getState }: StateContext<CategoryListModel>) {
        return this.http.get(this.http.categoryApi, null).pipe((tap((res) => {
            const state = getState();
            console.log('<<<---Categories : ' + res['data']);
            setState({
                ...state,
                categories: res['data'],
            });
        })));
    }

}
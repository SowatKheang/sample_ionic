import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpService) { }

  public getProductList() {
    return this.http.get(this.http.productApi, null);
  }

  public getCategoryList() {
    return this.http.get(this.http.categoryApi, null);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl: string = environment.baseApiUrl;
  // apiUrl = 'https://api.spacexdata.com/v3';

  readonly spaceXInfoApi : string = "/info";
  readonly userApi: string = 'users'
  readonly productApi: string = 'products'
  readonly categoryApi: string = 'categories'

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param end_point 
   * @param params 
   * @returns 
   */
  public get(end_point: string, params) {
    return this.http.get<[]>(`${this.apiUrl}${end_point}`, {params});
    // return this.http.get<[]>(`${environment.baseUrl}${end_point}`, {params});
  }

  /**
   * 
   * @param end_point 
   * @param params 
   */
  public post(end_point: string, params) {
    // return this.http.post<[]>(`${environment.baseUrl}${end_point}`, params);
  }

}

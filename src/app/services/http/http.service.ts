import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // apiURL : string = environment.baseUrl;
  // apiUrl = 'https://api.spacexdata.com/v3';
  apiUrl = 'http://192.168.70.197:8080/api/';

  readonly spaceXInfoApi : string = "/info";
  readonly userApi: string = 'users'
  readonly productApi: string = 'products'
  readonly categoryApi: string = 'categories'

  constructor(private http: HttpClient) { }


  /**
   * Get Method
   */
  public get(end_point: string, params) {
    return this.http.get<[]>(`${this.apiUrl}${end_point}`, {params});
    // return this.http.get<[]>(`${environment.baseUrl}${end_point}`, {params});
  }

  /**
   * Set Method
   */
  public post(end_point: string, params) {
    // return this.http.post<[]>(`${environment.baseUrl}${end_point}`, params);
  }

}

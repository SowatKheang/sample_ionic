import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  // apiUrl = 'https://api.spacexdata.com/v3/info';

  constructor(private http: HttpService) {}
  
  /**
   * 
   * @returns 
   */
  getSpaceXData(): Observable<any> {
    return this.http.get(this.http.spaceXInfoApi, null)
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getSpaceXData', []))
      );
  }

  // getSpaceXData() {
  //   return this.http.get(this.apiUrl);
  // }

  /**
   * 
   * @param operation 
   * @param result 
   * @returns 
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** 
   * Log a HeroService message with the MessageService 
   */
  private log(message: string) {
    console.log(message);
  }
  
}

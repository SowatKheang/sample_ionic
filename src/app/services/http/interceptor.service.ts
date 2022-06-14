import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { StorageService } from '../storages/storage-service.service';

@Injectable({
  providedIn: 'root'
})
/** 
 * 
 * The HttpInterceptorService class implements the HttpInterceptor interface 
 * and intercepts all HTTPrequests and responses 
 */
export class HttpInterceptorService implements HttpInterceptor {

  loading: any;
  token: any;

  constructor(public loadingController: LoadingController, private storageService: StorageService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.getToken();
    /// Authentication by setting header with token value
    if (this.token) {
      req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.token) });
    }
    // if (token) {
    //   req = req.clone({
    //     setHeaders: {
    //       'Authorization': token
    //     }
    //   });
    // }

    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        setHeaders: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    req = req.clone({
      headers: req.headers.set('Accept', 'application/json')
    });

    this.showLoading();

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      }),
    );
  }

  async getToken() {
    this.token = await this.storageService.get('USER_INFO');
    console.log(this.token)
  }

  async showLoading() {
    // const loader = await this.loadingController.create({
    //   message: 'Processing Server Request',
      // duration: 500
    // });
    // return loader.present();
    // await loader.onDidDismiss();
    // console.log('Loading dismissed!');

    this.loading = this.loadingController.create({
      message: 'Loading ...',
      duration: 500
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    this.hideLoading();
  }

  hideLoading(): void {
    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });
  }

}


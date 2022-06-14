import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';
import { StorageService } from '../storages/storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.baseApiUrl;
  authState = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private storageService: StorageService,
    private platform: Platform,
    public toastController: ToastController,
    private http: HttpService,
  ) { 
    this.platform.ready().then(() => {
      this.isLoggedIn();
    });
  }

  public async login(email, password) {
    var params = {"email": email, "password": password};

    await this.http.post('auth', params).subscribe((res)=> {
      let token = res['accessToken'];
      if (token) {
        this.storageService.set('USER_INFO', token);
        this.router.navigate(['profile']);
        this.authState.next(true);
      }
    });

    
  }

  public logout() {
    this.storageService.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }

  public isLoggedIn() {
    this.storageService.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }

  public isAuthenticated(): boolean {
    return this.authState.value;
  }

}

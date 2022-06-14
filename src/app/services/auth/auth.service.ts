import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, Platform, AlertController } from '@ionic/angular';
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
    private alertController: AlertController
  ) { 
    this.platform.ready().then(() => {
      this.isLoggedIn();
    });
  }

  public async login(email, password) {
    var params = {"email": email, "password": password};
    await this.http.post('auth', params).subscribe(async (res)=> {
      let token = res['accessToken'];
      if (token) {
        this.storageService.set('USER_INFO', token);
        this.router.navigate(['profile']);
        this.authState.next(true);
      } else {
        const alert = await this.alertController.create({
          header: 'Info',
          message: 'Incorrect Email or Password',
          buttons: ['Ok']
        });
        await alert.present();
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

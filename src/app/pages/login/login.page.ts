import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AbstractPage } from '../base/abstract.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends AbstractPage {

  credentials: FormGroup;

  constructor(
    private _platform: Platform,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
  ) {
    super(_platform);
  }

  onInit(): void {
    this.setTitle('login');
    this.credentials = this.formBuilder.group({
      email: ['john@gmail.com', [Validators.required, Validators.email]],
      password: ['123', [Validators.required, Validators.minLength(3)]],
    });
  }

  async login() {
    this.authService.login(this.email.value, this.password.value);
  }

  get email() {
    return this.credentials.get('email');
  }
  
  get password() {
    return this.credentials.get('password');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AbstractPage } from '../base/abstract.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage extends AbstractPage {

  constructor(
    private _platform: Platform,
    private authService: AuthService,
    private router: Router,
  ) { 
    super(_platform);
  }

  onInit(): void {
    this.setTitle('profile');
  }

  logout() {
    this.authService.logout();
  }

}

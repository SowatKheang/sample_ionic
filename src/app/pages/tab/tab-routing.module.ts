import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home-routing.module').then(m => m.HomePageRoutingModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about-routing.module').then(m => m.AboutPageRoutingModule),
        data: {
          name: 'About'
        }
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact-routing.module').then(m => m.ContactPageRoutingModule),
        data: {
          name: 'Contact'
        }
      },
      {
        path: 'products',
        loadChildren: () => import('../product/product-routing.module').then(m => m.ProductPageRoutingModule),
        data: {
          name: 'Product'
        }
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule),
        canActivate: [AuthGuardService],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { SelectiveLoadingStrategy } from './services/strategy/selective-loading-strategy';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule),
    data: {
      name: 'Tab'
    }
  },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule),
  //   data: {
  //     name: 'About'
  //   }
  // },
  // {
  //   path: 'contact',
  //   loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule),
  //   data: {
  //     name: 'Contact'
  //   }
  // },
  // {
  //   path: 'products',
  //   loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule),
  //   data: {
  //     name: 'Product List'
  //   }
  // },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuardService],
    data: {
      name: 'Dashboard'
    }
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
  //   canActivate: [AuthGuardService],
  // },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    RouterModule.forRoot(routes, { preloadingStrategy: SelectiveLoadingStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

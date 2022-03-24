import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailPage } from './product-detail/product-detail.page';

import { ProductPage } from './product.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPage,
    children: [
      {
        path: 'product/:id',
        loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
      }
    ],
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}

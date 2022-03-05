import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { Products } from './pages/products/products.component';
import { SingleProduct } from './pages/single-product/single-product.component';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'single-product', component: SingleProduct },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

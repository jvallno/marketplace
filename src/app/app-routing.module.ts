import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUs } from './pages/about-us/about-us.component';
import { ContactUs } from './pages/contact-us/contact-us.component';
import { Home } from './pages/home/home.component';
import { Products } from './pages/products/products.component';
import { SingleProduct } from './pages/single-product/single-product.component';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'single-product', component: SingleProduct },
  { path: 'contact-us', component: ContactUs },
  { path: 'about-us', component: AboutUs },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

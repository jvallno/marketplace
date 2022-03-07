import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home} from './pages/home/home.component';
import { Products } from './pages/products/products.component';
import { SingleProduct } from './pages/single-product/single-product.component';
import { ContactUs } from './pages/contact-us/contact-us.component';
import { AboutUs } from './pages/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Products,
    SingleProduct,
    ContactUs,
    AboutUs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

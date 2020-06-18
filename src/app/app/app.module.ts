import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

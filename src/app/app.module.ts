import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/products.component';
import { StarComponent} from './shared/star.component';
import { ConvertToSpacePipe } from './shared/convertToSpace.pipe';
import { ProductService } from './products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StarComponent,
    ConvertToSpacePipe
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

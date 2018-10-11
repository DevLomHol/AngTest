import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { ProductComponent } from './products/products.component';
import { StarComponent} from './shared/star.component';
import { ConvertToSpacePipe } from './shared/convertToSpace.pipe';
import { ProductService } from './products/product.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StarComponent,
    ConvertToSpacePipe,
    ProductDetailComponent,
    WelcomeComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductComponent },
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent },
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      {path : '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

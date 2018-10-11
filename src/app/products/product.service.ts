import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';
import  {catchError, tap} from 'rxjs/operators';


@Injectable({
    providedIn : 'root'
})
export class ProductService {
  
  private url: string = 'api/products/products.json';

  constructor(private httpClient : HttpClient) {

  }
  getProducts() : Observable<IProduct[]> {
      return this.httpClient.get<IProduct[]>(this.url).pipe(
       tap( data => console.log(JSON.stringify(data))),
       //catchError()
      );
  } 

}

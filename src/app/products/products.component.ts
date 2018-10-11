import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductComponent implements OnInit {
  prodCompTitle : string = 'Products List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  errorData : any;
  dataComplete: any;

  filteredProducts: IProduct[];

  products: IProduct[];

  constructor (private productService: ProductService) {
      this.listFilter = 'cart';
  }

  get listFilterProp() : string {
      return this.listFilter;
  }

  set listFilterProp(value) {
    this.listFilter = value;
    this.filteredProducts = this.listFilter ? this.filterProducts(this.listFilter) : this.products;
  }

  ngOnInit() : void {
      this.productService.getProducts().subscribe(
        
      products => {
        this.products = products;
        this.filteredProducts = this.listFilter ? this.filterProducts(this.listFilter) : this.products;
      }
      ,
      error => this.errorData = <any>error);

    this.filteredProducts = this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  
  filterProducts (criteria : string): IProduct[] {
    criteria = criteria.toLocaleLowerCase();
    console.log(criteria);
    return this.products.filter((p : IProduct) => 
      p.productName.toLocaleLowerCase().indexOf(criteria) != -1);
  }

  onNestedControlNotify(val: string) : void {
   this.prodCompTitle = val;
  }

    
   

}

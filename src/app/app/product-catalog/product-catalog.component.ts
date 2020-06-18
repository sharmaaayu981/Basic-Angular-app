import { Component} from '@angular/core';
import {Product} from '../common/product';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent  {
productCatalog: Product[] = [
  new Product(101,'Mobile Phone', 'Electronics' , '3 Units',12500),
  new Product(102,'Laptop', 'Electronics' , '10 Units',60000),
  new Product(103,'Shirt', 'Fashion' , '20 Units',999),
  new Product(104,'Pen', 'Education' , '100 Units',15)
];


}

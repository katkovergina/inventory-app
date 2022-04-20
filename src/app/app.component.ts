import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[]

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black running shoes',
        'assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        100
      ),
      new Product(
        'MYSHOES2',
        'Black running shoes',
        'assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        100
      ),
      new Product(
        'MYSHOES3',
        'Black running shoes',
        'assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        100
      ),

    ]
  }

  productWasSelected(product: Product): void {
    console.log('product clicked', product)
  }
}

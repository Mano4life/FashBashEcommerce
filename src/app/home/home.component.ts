import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetProductsService } from '../services/get-products/get-products.service';
import { CommonModule } from '@angular/common';
import { CartCounterService } from '../services/cart-counter/cart-counter.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cartCounter!: number;
  products!: any;
  constructor(
    private router: Router,
    private productService: GetProductsService,
    private counter: CartCounterService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });

    this.counter.getCounter().subscribe((value) => {
      this.cartCounter = value;
    });
  }

  increment() {
    this.counter.updateCounter(this.cartCounter + 1);
  }

  onAddToCart(product: any) {
    if (product.stock > 0) {
      this.increment();
      this.cartService.addToCart(product);
      console.log(product, 'added this product to cart');
    } else {
      alert('out of stock');
    }
  }

  onProductClick(id: number) {
    this.router.navigate(['/view', id]);
  }

  getStarArray(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
}

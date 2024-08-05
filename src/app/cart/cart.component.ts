import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartCounterService } from '../services/cart-counter/cart-counter.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartCounter!: number;
  totalPrice: number = 0;
  productProxies: any[] = []; 
  cartItems: any[] = [];
  constructor(private cartService: CartService, private counter: CartCounterService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.productProxies = this.cartItems.map(product => ({
      ...product,
      unitPrice: product.price,
      quantity: 1,
    }));

    this.totalPrice = this.cartItems.reduce((acc, item) => acc + item.price, 0);

    this.counter.getCounter().subscribe((value) => {
      this.cartCounter = value;
    })
  }

    //increasing & decreasing quantity
    onIncreaseQuantity(item: any) {
      item.quantity += 1; 
      item.price = (item.unitPrice * item.quantity).toFixed(2);
      this.totalPrice += item.unitPrice;
    }
  
    onDecreaseQuantity(item: any) {
      if (item.quantity > 1) { 
        item.quantity -= 1; 
        item.price = (item.unitPrice * item.quantity).toFixed(2);
        this.totalPrice -= item.unitPrice;
      }
    }

    decrement(){
      this.counter.updateCounter(this.cartCounter - 1);
    }
    onRemoveItem(item: any) {
      this.productProxies = this.cartService.removeCartItem(item);
      this.decrement();
    }
}

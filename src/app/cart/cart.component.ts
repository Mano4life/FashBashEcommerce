import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  totalPrice: number = 0;
  productProxies: any[] = []; 
  cartItems: any[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.productProxies = this.cartItems.map(product => ({
      ...product,
      unitPrice: product.price,
      quantity: 1,
    }));

    this.totalPrice = this.cartItems.reduce((acc, item) => acc + item.price, 0);
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

    onRemoveItem(item: any) {
      this.cartItems = this.cartService.removeCartItem(item);
    }
}

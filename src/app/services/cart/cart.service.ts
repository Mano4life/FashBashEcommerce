import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() { }

  addToCart(product:any){
    this.cartItems.push(product);
  }

  getCartItems(){
    return this.cartItems;
  }

  removeCartItem(product:any){
    this.cartItems = this.cartItems.filter(item => item.id !== product.id);
    return this.cartItems;
  }
}

import { Component, Input } from '@angular/core';
import { GetProductsService } from '../services/get-products/get-products.service';
import { CartCounterService } from '../services/cart-counter/cart-counter.service';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  @Input() id: any;
  productsArray!: any;
  product!: any;
  productQuantity: number = 1;
  unitPrice!: number;
  cartCounter!: any;

  //initializing product data
  constructor(
    private productService: GetProductsService,
    private counter: CartCounterService
  ) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.productsArray = res;
      this.product = this.productsArray.find(
        (product: any) => product.id == this.id
      );
      this.unitPrice = this.product.price;
    });

    this.counter.getCounter().subscribe((value) => {
      this.cartCounter = value;
    })
  }


  //increasing & decreasing quantity
  onIncreaseQuantity() {
    this.productQuantity += 1;
    this.product.price = (this.unitPrice * this.productQuantity).toFixed(2);
  }

  onDecreaseQuantity() {
    if (this.productQuantity > 1) {
      this.productQuantity -= 1;
      this.product.price = (this.unitPrice * this.productQuantity).toFixed(2);
    }
  }


  //buy button handler
  onBuyNow() {
    if (this.product.stock > 0) {
      this.product.price = this.unitPrice;
      this.productQuantity = 1;
      alert('thanks for shopping with us');
    } else {
      alert('out of stock');
    }
  }

  //add to cart
  increment(){
    this.counter.updateCounter(this.cartCounter + 1);
  }
  onAddToCart() {
    if (this.product.stock > 0) {
      this.product.price = this.unitPrice;
      this.productQuantity = 1;
      this.increment();
    } else {
      alert('out of stock');
    }
  }
}

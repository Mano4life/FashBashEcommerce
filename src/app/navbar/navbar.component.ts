import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartCounterService } from '../services/cart-counter/cart-counter.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartCounter!: number;

  constructor(private counter: CartCounterService){}

  ngOnInit(){
    this.counter.getCounter().subscribe((value) => {
      this.cartCounter = value;
    })
  }
}

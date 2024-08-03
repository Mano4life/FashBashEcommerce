import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Wireless Earbuds',
      price: 99.99,
      description: 'Wireless Earbuds by soundcore',
      image: 'assets/images/products/earbuds.jpeg',
      stock: 10,
      rating: 4
    },
    {
      id: 2,
      name: 'TV',
      price: 699.99,
      description: '4K TV by Sony',
      image: 'assets/images/products/tv.jpeg',
      stock: 5,
      category: 'electronics',
      rating: 5
    },
    {
      id: 3,
      name: 'Laptop',
      price: 999.99,
      description: 'Macbook Pro by Apple',
      image: 'assets/images/products/laptop.jpeg',
      stock: 0,
      category: 'electronics',
      rating: 4
    },
    {
      id: 4,
      name: 'Smart Speaker',
      price: 79.99,
      description: 'Smart Speaker by Amazon',
      image: 'assets/images/products/speaker.jpeg',
      stock: 7,
      category: 'electronics',
      rating: 3
    },
    {
      id: 5,
      name: 'Wireless Headphones',
      price: 149.99,
      description: 'Wireless Headphones by Bose',
      image: 'assets/images/products/headphones.jpeg',
      stock: 10,
      category: 'electronics',
      rating: 2
    },
    {
      id: 6,
      name: 'Gaming Console',
      price: 299.99,
      description: 'Gaming Console by Nintendo',
      image: 'assets/images/products/console.jpeg',
      stock: 0,
      category: 'electronics',
      rating: 4
    },
    {
      id: 7,
      name: 'Smart TV',
      price: 399.99,
      description: 'Smart TV by Samsung',
      image: 'assets/images/products/tv2.jpeg',
      stock: 6,
      category: 'electronics',
      rating: 5
    },
    {
      id: 8,
      name: 'Smartphone',
      price: 199.99,
      description: 'Smartphone by Samsung',
      image: 'assets/images/products/phone.jpeg',
      stock: 0,
      category: 'electronics',
      rating: 1
    }
  ]

}

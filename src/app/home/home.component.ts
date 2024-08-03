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
      image: 'https://picsum.photos/200/300',
      stock: 10,
      rating: 4
    },
    {
      id: 2,
      name: 'TV',
      price: 699.99,
      description: '4K TV by Sony',
      image: 'https://picsum.photos/240/135',
      stock: 5,
      category: 'electronics',
      rating: 5
    },
    {
      id: 3,
      name: 'Laptop',
      price: 999.99,
      description: 'Macbook Pro by Apple',
      image: 'https://picsum.photos/240/135',
      stock: 3,
      category: 'electronics',
      rating: 4
    },
    {
      id: 4,
      name: 'Smart Speaker',
      price: 79.99,
      description: 'Smart Speaker by Amazon',
      image: 'https://picsum.photos/240/135',
      stock: 7,
      category: 'electronics',
      rating: 4.5
    },
    {
      id: 5,
      name: 'Wireless Headphones',
      price: 149.99,
      description: 'Wireless Headphones by Bose',
      image: 'https://picsum.photos/240/135',
      stock: 10,
      category: 'electronics',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Gaming Console',
      price: 299.99,
      description: 'Gaming Console by Nintendo',
      image: 'https://picsum.photos/240/135',
      stock: 2,
      category: 'electronics',
      rating: 4.2
    },
  ]

}

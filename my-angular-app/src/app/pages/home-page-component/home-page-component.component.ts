import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-page-component.component.html',
  styleUrl: './home-page-component.component.scss'
})
export class HomePageComponentComponent {
  username = 'JohnDoe';
  searchTerm = '';
  cart: any[] = [];

  carouselImages = [
    'https://images.vexels.com/content/194698/preview/shop-online-slider-template-4f2c60.png',
    'https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321996.jpg?t=st=1744994156~exp=1744997756~hmac=a0912d067f1170b902789598d231e0d7e33832857f03b6d96420b6603a3f9e83&w=1060',
    'https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?t=st=1744994213~exp=1744997813~hmac=40cc115358f1cab03bd0d0771f8e48456ce3b9d434a574a9b9308e5452f1ed43&w=1380',
    'https://img.freepik.com/premium-psd/summer-fashion-sale-banner-media-template_117195-624.jpg?w=826'
  ];
  currentSlide = 0;

  categories = [
    { name: "Mobiles", image: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg' },
    { name: "Men's Fashion", image: 'https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/Halos/withoutshadow/SHIRTS._SS300_QL85_FMpng_.png' },
    { name: "Women's Fashion", image: 'https://m.media-amazon.com/images/G/31/img23/WA/december/p0-halo/without/Salwarsuits._SS400_QL85_FMpng_.png' },
    { name: "Electronics", image: 'https://m.media-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/ATF/Halos/Halos_300x300_1._CB612633941_.png' },
  ];

  products = [
    {
      name: 'Smartphone XYZ',
      description: 'Powerful smartphone with great features',
      price: 499.99,
      rating: 4.5,
      image: 'https://via.placeholder.com/200x150?text=Phone'
    },
    {
      name: 'Bluetooth Headphones',
      description: 'Noise-cancelling over-ear headphones',
      price: 99.99,
      rating: 4.7,
      image: 'https://via.placeholder.com/200x150?text=Headphones'
    },
    {
      name: 'Men’s Jacket',
      description: 'Stylish winter jacket',
      price: 79.99,
      rating: 4.2,
      image: 'https://via.placeholder.com/200x150?text=Jacket'
    },
    {
      name: 'LED TV 42"',
      description: 'Smart TV with crisp display',
      price: 299.99,
      rating: 4.6,
      image: 'https://via.placeholder.com/200x150?text=TV'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    setInterval(() => this.nextSlide(), 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  filteredProducts() {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addToCart(product: any) {
    this.cart.push(product);
    alert(`${product.name} added to cart!`);
  }

  logout() {
    console.log('Logging out...');
  }

  goToProductList() {
    this.router.navigate(['/cart']);
  }
}

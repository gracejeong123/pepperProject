// src/app/product-detail/product-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface Review {
  reviewerName: string;
  reviewText: string;
  reviewRating: number;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone: true,
  imports: [CommonModule] // Include CommonModule here
})
export class ProductDetailComponent implements OnInit {
  product = {
    id: 1,
    name: 'Product Name',
    price: 99.99,
    description: 'Detailed description of the product goes here.',
    imageUrl: 'assets/product/product1.jpeg',
    thumbnails: [
      'assets/product/product1.jpeg',
      'assets/product/product2.jpeg',
      'assets/product/product3.jpeg'
    ]
  };

  reviews: Review[] = [];
  review: Review = {
    reviewerName: '',
    reviewText: '',
    reviewRating: 1
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve product details from the route parameters or a service
    const productId = this.route.snapshot.paramMap.get('id');
    // Example: this.productService.getProductById(productId).subscribe(product => this.product = product);
  }

  addToCart() {
    // Logic to add the product to the shopping cart
    console.log('Added to cart:', this.product);
  }

  buyNow() {
    // Logic to proceed with the purchase of the product
    console.log('Buy now:', this.product);
  }

  submitReview() {
    // Add new review to the reviews array
    this.reviews.push({...this.review});
    // Reset review form
    this.review = {
      reviewerName: '',
      reviewText: '',
      reviewRating: 1
    };
  }
}

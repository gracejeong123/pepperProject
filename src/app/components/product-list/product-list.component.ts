import { Component } from '@angular/core'; // Import the Component decorator from Angular core
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives like ngIf and ngFor
import { Router } from '@angular/router'; // Import Router to navigate programmatically
import { RouterModule } from '@angular/router'; // Import RouterModule to include router-related directives

interface Product {
  id: number;           // Unique identifier for the product
  name: string;         // Name of the product
  description: string;  // Description of the product
  price: number;        // Price of the product
  imageUrl: string;     // URL to the product image
  thumbnails: string[]; // URL to the thumbnails
  //sellerDescription: string;  // Description of the seller
  reviewCount: number;  // Number of reviews
  likes: number;        // Number of likes received
}


@Component({
  selector: 'app-product-list', // Selector for the component, used in HTML
  templateUrl: './product-list.component.html', // Path to the HTML template
  styleUrls: ['./product-list.component.css'], // Path to the CSS styles
  standalone: true, // Indicates that this component is standalone and does not require an NgModule
  imports: [
    CommonModule, // Import CommonModule for common Angular directives
    RouterModule  // Import RouterModule to use routing-related features
  ]
})
export class ProductListComponent {
  // Array of product objects that will be displayed in the product list
  product: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is product 1',
      price: 29.99,
      imageUrl: 'assets/product/product5.jpeg',
      thumbnails: [], // Add appropriate thumbnails
      reviewCount: 50, 
      likes: 200
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is product 1',
      price: 29.99,
      imageUrl: 'assets/product/product5.jpeg',
      thumbnails: [], // Add appropriate thumbnails
      reviewCount: 50, 
      likes: 200
    },
    {
      id: 1,
      name: 'Product 1',
      description: 'This is product 1',
      price: 29.99,
      imageUrl: 'assets/product/product5.jpeg',
      thumbnails: [], // Add appropriate thumbnails
      reviewCount: 50, 
      likes: 200
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is product 1',
      price: 29.99,
      imageUrl: 'assets/product/product5.jpeg',
      thumbnails: [], // Add appropriate thumbnails
      reviewCount: 50, 
      likes: 200
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This is product 1',
      price: 29.99,
      imageUrl: 'assets/product/product5.jpeg',
      thumbnails: [], // Add appropriate thumbnails
      reviewCount: 50, 
      likes: 200
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'This is product 1',
      price: 29.99,
      imageUrl: 'assets/product/product5.jpeg',
      thumbnails: [], // Add appropriate thumbnails
      reviewCount: 50, 
      likes: 200
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'This is product 1',
      price: 29.99,
      imageUrl: 'assets/product/product5.jpeg',
      thumbnails: [], // Add appropriate thumbnails
      reviewCount: 50, 
      likes: 200
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'This is product 1',
      price: 29.99,
      imageUrl: 'assets/product/product5.jpeg',
      thumbnails: [], // Add appropriate thumbnails
      reviewCount: 50, 
      likes: 200
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'This is product 1',
      price: 29.99,
      imageUrl: 'assets/product/product5.jpeg',
      thumbnails: [], // Add appropriate thumbnails
      reviewCount: 50, 
      likes: 200
    },
    {
      id: 9,
      name: 'Product 9',
      description: 'This is product 1',
      price: 29.99,
      imageUrl: 'assets/product/product5.jpeg',
      thumbnails: [], // Add appropriate thumbnails
      reviewCount: 50, 
      likes: 200
    },
    {
      id: 10,
      name: 'Product 10',
      description: 'This is product 1',
      price: 29.99,
      imageUrl: 'assets/product/product5.jpeg',
      thumbnails: [], // Add appropriate thumbnails
      reviewCount: 50, 
      likes: 200
    }
    // Add more products as needed
  ];

  // Array to hold sorted products
  sortedProducts: Product[] = [...this.product];

  constructor(private router: Router) {} // Inject Router service into the constructor for navigation

  // Method to navigate to the product details page based on product ID
  viewProductDetails(productId: number): void {
    this.router.navigate(['/product-detail', productId]);
  }

  // Method to handle sorting based on selected criteria
  onSortChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

    switch (value) {
      case 'name':
        this.sortedProducts = this.product.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'priceAsc':
        this.sortedProducts = this.product.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        this.sortedProducts = this.product.sort((a, b) => b.price - a.price);
        break;
      case 'reviews':
        this.sortedProducts = this.product.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'likes':
        this.sortedProducts = this.product.sort((a, b) => b.likes - a.likes);
        break;
      default:
        this.sortedProducts = [...this.product]; // Reset to original order
        break;
    }
  }
}

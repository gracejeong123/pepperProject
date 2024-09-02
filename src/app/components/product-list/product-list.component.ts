// Define an interface for the product data structure
interface Product {
  id: number;           // Unique identifier for the product
  name: string;         // Name of the product
  description: string;  // Description of the product
  price: number;        // Price of the product
  imageUrl: string;     // URL to the product image
}

import { Component } from '@angular/core'; // Import the Component decorator from Angular core
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives like ngIf and ngFor
import { Router } from '@angular/router'; // Import Router to navigate programmatically
import { RouterModule } from '@angular/router'; // Import RouterModule to include router-related directives

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
  product = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is product 1',
      price: 29.99,
      imageUrl: 'assets/product/product5.jpeg'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is product 2',
      price: 59.99,
      imageUrl: 'assets/product/product5.jpeg'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is product 2',
      price: 59.99,
      imageUrl: 'assets/product/product5.jpeg'
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This is product 2',
      price: 59.99,
      imageUrl: 'assets/product/product5.jpeg'
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'This is product 2',
      price: 59.99,
      imageUrl: 'assets/product/product5.jpeg'
    }
    // Add more products as needed
  ];

  constructor(private router: Router) {} // Inject Router service into the constructor for navigation

  // Method to navigate to the product details page based on product ID
  viewProductDetails(productId: number): void {
    this.router.navigate(['/product-detail', productId]);
  }
}

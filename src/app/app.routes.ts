// src/app/routes.ts

import { Routes } from '@angular/router'; // Import Routes type from @angular/router
import { ProductListComponent } from './components/product-list/product-list.component'; // Import ProductListComponent
import { ProductDetailComponent } from './components/product-detail/product-detail.component'; // Import ProductDetailComponent
import { ContactComponent } from './components/contact/contact.component'; // Import ContactComponent
import { AboutComponent } from './about/about.component'; // Import AboutComponent

// Define the application's routes
export const routes: Routes = [
  // Default route, directs to the product listing page
  { path: '', component: ProductListComponent },

  // Route for viewing the details of a specific product
  // 'id' is a route parameter to identify the product
  { path: 'product-detail/:id', component: ProductDetailComponent },

  // Route for the contact page
  { path: 'contact', component: ContactComponent },

  // Route for the about page
  { path: 'about', component: AboutComponent }
];



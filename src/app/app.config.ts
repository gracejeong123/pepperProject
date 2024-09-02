// Import necessary modules and functions from Angular core and router packages
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

// Import the route configuration from the routes file
import { routes } from './app.routes';

// Define the application configuration
export const appConfig: ApplicationConfig = {
  // Provide configuration for change detection and routing
  providers: [
    // Enable zone change detection with event coalescing
    provideZoneChangeDetection({ eventCoalescing: true }),
    
    // Set up the router with the routes defined in 'app.routes'
    provideRouter(routes)
  ]
};


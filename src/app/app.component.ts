// Import necessary modules and components from Angular core and router packages
import { Component } from '@angular/core'; // Import Angular's Component decorator
import { NavbarComponent } from './components/navbar/navbar.component'; // Import the NavbarComponent
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet to handle routing
import { RouterModule } from '@angular/router'; // Import RouterModule for routing functionality

// Define the root component of the application
@Component({
  selector: 'app-root', // The selector to use this component in HTML templates
  standalone: true, // Mark this component as a standalone component
  imports: [RouterOutlet, NavbarComponent, RouterModule], // Declare imports required for this component
  templateUrl: './app.component.html', // Path to the component's HTML template
  styleUrls: ['./app.component.css'] // Path to the component's CSS styles
})
export class AppComponent {
  title = 'pepper-frontend'; // Define a title property for the component
}

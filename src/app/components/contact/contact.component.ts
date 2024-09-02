import { Component } from '@angular/core';

// Define a component named 'ContactComponent' that will handle the contact page
@Component({
  selector: 'app-contact', // Selector used to embed this component in other templates
  templateUrl: './contact.component.html', // Path to the HTML template for this component
  styleUrls: ['./contact.component.css'], // Path to the CSS styles specific to this component
  standalone: true // This component is standalone and not part of an Angular module
})
export class ContactComponent {
  // Define an object to hold the contact details (email and phone number)
  contactDetails = {
    email: 'contact@peppershandmade.com', // The contact email address
    phone: '+1-234-567-890' // The contact phone number
  };
}

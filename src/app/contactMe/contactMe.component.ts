import { Component } from '@angular/core';
import { ContactFormComponent } from './contactForm/contactForm.component';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contactMe.component.html',
  styleUrls: ['./contactMe.component.scss'],
})
export class ContactMeComponent {
  
}

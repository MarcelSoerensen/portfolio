import { Component } from '@angular/core';
import { ContactFormComponent } from './contactForm/contactForm.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [ContactFormComponent, TranslocoModule],
  templateUrl: './contactMe.component.html',
  styleUrls: ['./contactMe.component.scss'],
})
export class ContactMeComponent {
  
}

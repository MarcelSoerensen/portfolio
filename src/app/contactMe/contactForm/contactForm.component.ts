import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.scss']
})
export class ContactFormComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
    privacyChecked: false,
  };

  privacyError = false;

  onSubmit(ngForm: NgForm) {
    if (!this.contactData.privacyChecked) {
      this.privacyError = true;
    } else {
      this.privacyError = false;
    }
    if (ngForm.valid && this.contactData.privacyChecked) {
      console.log(this.contactData);
    }
  }
}

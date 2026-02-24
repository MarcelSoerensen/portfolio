import { HttpClient } from '@angular/common/http';
import { Component, inject} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, TranslocoModule],
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.scss']
})
export class ContactFormComponent {

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyChecked: false,
  };

  privacyError = false;

  mailTest = false;

  post = {
    endPoint: 'https://marcel-soerensen.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'text' as const,
    },
  };

  onSubmit(ngForm: NgForm) {
    if (!this.contactData.privacyChecked) {
      this.privacyError = true;
      return;
    }
    this.privacyError = false;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}


import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, TranslocoModule],
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.scss']
})
export class ContactFormComponent {
  constructor(private http: HttpClient, private translocoService: TranslocoService) {}

  contactData: {
    name: string;
    email: string;
    message: string;
    privacyChecked: boolean;
    language?: string;
  } = {
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
    this.contactData.language = this.translocoService.getActiveLang();
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


import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule],
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.scss', './mailStatusBox.scss'],
})
export class ContactFormComponent {
    mailStatus: 'success' | 'error' | null = null;
    mailStatusText: string = '';
    mailStatusTimeout: any;
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
            this.showMailStatus('success', this.translocoService.translate('contactForm.successMessage') || 'Nachricht erfolgreich gesendet!');
          },
          error: (error) => {
            console.error(error);
            this.showMailStatus('error', this.translocoService.translate('contactForm.errorMessage') || 'Fehler beim Senden!');
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.showMailStatus('success', this.translocoService.translate('contactForm.successMessage') || 'Nachricht erfolgreich gesendet!');
    }
  }

  showMailStatus(status: 'success' | 'error', text: string) {
    this.mailStatus = status;
    this.mailStatusText = text;
    clearTimeout(this.mailStatusTimeout);
    this.mailStatusTimeout = setTimeout(() => {
      this.mailStatus = null;
    }, 3000);
  }
  }

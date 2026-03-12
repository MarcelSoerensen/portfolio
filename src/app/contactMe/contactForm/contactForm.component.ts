import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { PageEffectsService } from '../../shared/PageEffectsService';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule],
  templateUrl: './contactForm.component.html',
  styleUrls: [
    './contactForm.component.scss',
    './mailStatusBox.scss',
    './contactFormMobile.component.scss',
  ],
})
export class ContactFormComponent {
  shouldShowPrivacyError(form: NgForm): boolean {
    if (!form) return false;
    const controls = form.controls;
    if (!controls['name'] || !controls['email'] || !controls['message'])
      return false;
    const nameValid = controls['name'].valid;
    const emailValid = controls['email'].valid;
    const messageValid = controls['message'].valid;
    return (
      nameValid &&
      emailValid &&
      messageValid &&
      !this.contactData.privacyChecked
    );
  }
  constructor(
    private http: HttpClient,
    private translocoService: TranslocoService,
    private router: Router,
    private route: ActivatedRoute,
    private pageEffects: PageEffectsService,
  ) {}

  navigateToPrivacy() {
    this.pageEffects.navigateAndSmoothScroll(
      '/privacy-police',
      'privacyPoliceSection',
    );
  }
  mailStatus: 'success' | 'error' | null = null;
  mailStatusText: string = '';
  mailStatusTimeout: any;
  privacyOverlayVisible = false;

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
      this.http
        .post(
          this.post.endPoint,
          this.post.body(this.contactData),
          this.post.options,
        )
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.showMailStatus(
              'success',
              this.translocoService.translate('contactForm.successMessage') ||
                'Nachricht erfolgreich gesendet!',
            );
          },
          error: (error) => {
            console.error(error);
            this.showMailStatus(
              'error',
              this.translocoService.translate('contactForm.errorMessage') ||
                'Fehler beim Senden!',
            );
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.showMailStatus(
        'success',
        this.translocoService.translate('contactForm.successMessage') ||
          'Nachricht erfolgreich gesendet!',
      );
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

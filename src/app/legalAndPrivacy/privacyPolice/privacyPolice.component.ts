import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BackToHomeButtonComponent } from '../backToHomeButton/backToHomeButton.component';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-privacy-police',
  standalone: true,
  imports: [TranslocoModule, BackToHomeButtonComponent],
  templateUrl: './privacyPolice.component.html',
  styleUrls: ['./privacyPolice.component.scss', '../legalAndPrivacy.scss']
})
export class PrivacyPoliceComponent implements OnDestroy {
  private langSub: any;

  constructor(private transloco: TranslocoService, private cdr: ChangeDetectorRef) {
    this.langSub = this.transloco.langChanges$.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.langSub) this.langSub.unsubscribe();
  }
}

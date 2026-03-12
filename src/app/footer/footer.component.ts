import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLogoComponent } from '../profileLogo/profileLogo.component';
import { TranslocoModule } from '@jsverse/transloco';
import { PageEffectsService } from '../shared/PageEffectsService';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ProfileLogoComponent, TranslocoModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private pageEffects: PageEffectsService) {}

  navigateToPrivacy() {
    this.pageEffects.navigateAndSmoothScroll(
      '/privacy-police',
      'privacyPoliceSection',
    );
  }

  navigateToLegal() {
    this.pageEffects.navigateAndSmoothScroll(
      '/legal-notice',
      'legalNoticeSection',
    );
  }
}

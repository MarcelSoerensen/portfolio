import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLogoComponent } from '../profileLogo/profileLogo.component';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ProfileLogoComponent, TranslocoModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  activeSection = '';
  selectedLanguage = 'en';

  constructor(private translocoService: TranslocoService) {
    this.translocoService.setActiveLang(this.selectedLanguage);
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  setLanguage(language: string) {
    this.selectedLanguage = language;
    this.translocoService.setActiveLang(language);
  }
}

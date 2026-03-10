import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProfileLogoComponent } from '../profileLogo/profileLogo.component';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ActiveLanguageService } from '../shared/active-language.service';
import { ActiveSectionService } from '../shared/active-section.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ProfileLogoComponent, TranslocoModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  activeSection = '';
  selectedLanguage = this.activeLanguageService.getLanguage();
  private langSub?: Subscription;
  private sectionSub?: Subscription;

  constructor(
    private translocoService: TranslocoService,
    private activeSectionService: ActiveSectionService,
    private activeLanguageService: ActiveLanguageService,
    private router: Router
  ) {
    this.langSub = this.activeLanguageService.language$.subscribe(lang => {
      this.selectedLanguage = lang;
      this.translocoService.setActiveLang(lang);
    });
    this.sectionSub = this.activeSectionService.activeSection$.subscribe(section => {
      this.activeSection = section;
    });
  }

  navigateToSection(section: string, anchor: string) {
    if (this.router.url.includes('legal-notice') || this.router.url.includes('privacy-police')) {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    } else {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
    }
    this.setActiveSection(section);
  }

  setActiveSection(section: string) {
    this.activeSectionService.setActiveSection(section);
  }

  setLanguage(language: string) {
    this.activeLanguageService.setLanguage(language);
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
    this.sectionSub?.unsubscribe();
  }
}

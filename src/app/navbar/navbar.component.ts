import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProfileLogoComponent } from '../profileLogo/profileLogo.component';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ActiveLanguageService } from '../shared/active-language.service';
import { NavigationService } from '../navigation.service';

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
    private activeLanguageService: ActiveLanguageService,
    private router: Router,
    private navigationService: NavigationService
  ) {
    this.langSub = this.activeLanguageService.language$.subscribe(lang => {
      this.selectedLanguage = lang;
      this.translocoService.setActiveLang(lang);
    });
    this.sectionSub = this.navigationService.activeSection$.subscribe(section => {
      this.activeSection = section;
    });
  }

  setLanguage(language: string) {
    this.activeLanguageService.setLanguage(language);
  }
  setActiveSection(section: string) {
    this.navigationService.setActiveSection(section);
  }
  navigateToSection(section: string) {
    this.navigationService.navigateToSection(section);
  }
  
  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
    this.sectionSub?.unsubscribe();
  }
}

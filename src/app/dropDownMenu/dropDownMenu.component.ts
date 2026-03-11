import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ActiveLanguageService } from '../shared/active-language.service';
import { NavigationService } from '../navigation.service';
import { ProfileLogoComponent } from '../profileLogo/profileLogo.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { LanguageToggleComponent } from '../languageToggle/languageToggle.component';

@Component({
  selector: 'app-dropDownMenu',
  standalone: true,
  imports: [
    NgIf,
    TranslocoModule,
    ProfileLogoComponent,
    NavigationComponent,
    LanguageToggleComponent,
  ],
  templateUrl: './dropDownMenu.component.html',
  styleUrls: ['./dropDownMenu.component.scss'],
})
export class DropDownMenuComponent implements OnDestroy {
  menuOpen = false;
  isFadingOut = false;
  menuIconSrc = '/assets/icons/mobile/menu_default.png';
  selectedLanguage = this.activeLanguageService.getLanguage();
  activeSection = '';
  private langSub?: Subscription;
  private sectionSub?: Subscription;
  private iconAnimationTimeouts: any[] = [];

  constructor(
    private translocoService: TranslocoService,
    private activeLanguageService: ActiveLanguageService,
    private navigationService: NavigationService,
  ) {
    this.langSub = this.activeLanguageService.language$.subscribe((lang) => {
      this.selectedLanguage = lang;
      this.translocoService.setActiveLang(lang);
    });
    this.sectionSub = this.navigationService.activeSection$.subscribe(
      (section) => {
        this.activeSection = section;
      },
    );
  }

  toggleMenu() {
    if (this.menuOpen) {
      this.animateMenuIcon(
        [
          '/assets/icons/mobile/menu_x_default.png',
          '/assets/icons/mobile/menu_x_slide.png',
          '/assets/icons/mobile/menu_slide.png',
          '/assets/icons/mobile/menu_default.png',
        ],
        false,
      );
    } else {
      this.animateMenuIcon(
        [
          '/assets/icons/mobile/menu_default.png',
          '/assets/icons/mobile/menu_slide.png',
          '/assets/icons/mobile/menu_x_slide.png',
          '/assets/icons/mobile/menu_x_default.png',
        ],
        true,
      );
    }
  }

  animateMenuIcon(frames: string[], open: boolean) {
    this.clearIconAnimation();
    frames.forEach((src, i) => {
      const timeout = setTimeout(() => {
        this.menuIconSrc = src;
        if (i === frames.length - 1) {
          this.menuOpen = open;
        }
      }, i * 60);
      this.iconAnimationTimeouts.push(timeout);
    });
  }

  clearIconAnimation() {
    this.iconAnimationTimeouts.forEach((t) => clearTimeout(t));
    this.iconAnimationTimeouts = [];
  }
  closeMenu() {
    this.menuOpen = false;
    this.isFadingOut = false;
    this.menuIconSrc = '/assets/icons/mobile/menu_default.png';
    this.clearIconAnimation();
  }

  onNavLinkClicked() {
    if (!this.isFadingOut) {
      this.isFadingOut = true;
      setTimeout(() => {
        this.closeMenu();
      }, 300);
    }
  }
  setLanguage(lang: string) {
    this.activeLanguageService.setLanguage(lang);
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
    this.clearIconAnimation();
  }
}

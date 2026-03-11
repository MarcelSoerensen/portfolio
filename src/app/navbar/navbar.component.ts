import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { TranslocoModule } from '@jsverse/transloco';
import { ProfileLogoComponent } from '../profileLogo/profileLogo.component';
import { LanguageToggleComponent } from '../languageToggle/languageToggle.component';
import { ActiveLanguageService } from '../shared/active-language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    TranslocoModule,
    ProfileLogoComponent,
    LanguageToggleComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  selectedLanguage = 'de';
  private langSub;

  constructor(private activeLanguageService: ActiveLanguageService) {
    this.langSub = this.activeLanguageService.language$.subscribe((lang) => {
      this.selectedLanguage = lang;
    });
  }

  setLanguage(lang: string) {
    this.activeLanguageService.setLanguage(lang);
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }
}

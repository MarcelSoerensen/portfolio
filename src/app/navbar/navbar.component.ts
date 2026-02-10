import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLogoComponent } from '../profileLogo/profileLogo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ProfileLogoComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  activeSection = '';
  selectedLanguage = 'de';

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  setLanguage(language: string) {
    this.selectedLanguage = language;
  }
}

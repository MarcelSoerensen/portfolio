import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
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

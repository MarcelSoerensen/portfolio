import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-dropDownMenu',
  standalone: true,
  imports: [NgIf, TranslocoModule],
  templateUrl: './dropDownMenu.component.html',
  styleUrls: ['./dropDownMenu.component.scss']
})
export class DropDownMenuComponent {
  menuOpen = false;
  selectedLanguage = 'en';
  activeSection = '';

  constructor(private translocoService: TranslocoService) {
    this.translocoService.setActiveLang(this.selectedLanguage);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
  setLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.translocoService.setActiveLang(lang);
  }
  setActiveSection(section: string) {
    this.activeSection = section;
  }
}

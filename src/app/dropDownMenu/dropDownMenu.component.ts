import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ActiveLanguageService } from '../shared/active-language.service';
import { ActiveSectionService } from '../shared/active-section.service';

@Component({
  selector: 'app-dropDownMenu',
  standalone: true,
  imports: [NgIf, TranslocoModule],
  templateUrl: './dropDownMenu.component.html',
  styleUrls: ['./dropDownMenu.component.scss']
})
export class DropDownMenuComponent implements OnDestroy {
  menuOpen = false;
  selectedLanguage = this.activeLanguageService.getLanguage();
  activeSection = '';
  private langSub?: Subscription;
  private sectionSub?: Subscription;

  constructor(
    private translocoService: TranslocoService,
    private activeSectionService: ActiveSectionService,
    private activeLanguageService: ActiveLanguageService
  ) {
    this.langSub = this.activeLanguageService.language$.subscribe(lang => {
      this.selectedLanguage = lang;
      this.translocoService.setActiveLang(lang);
    });
    this.sectionSub = this.activeSectionService.activeSection$.subscribe(section => {
      this.activeSection = section;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
  setLanguage(lang: string) {
    this.activeLanguageService.setLanguage(lang);
  }
  setActiveSection(section: string) {
    this.activeSectionService.setActiveSection(section);
  }
  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
    this.sectionSub?.unsubscribe();
  }
}

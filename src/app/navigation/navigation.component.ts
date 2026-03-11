import {
  Component,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../navigation.service';
import { ActiveLanguageService } from '../shared/active-language.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnDestroy {
  activeSection = '';
  selectedLanguage = 'de';
  private langSub?: any;
  private sectionSub?: any;

  @Input() column: boolean = false;
  @Output() linkClicked = new EventEmitter<void>();

  constructor(
    private navigationService: NavigationService,
    private activeLanguageService: ActiveLanguageService,
  ) {
    this.langSub = this.activeLanguageService.language$.subscribe((lang) => {
      this.selectedLanguage = lang;
    });
    this.sectionSub = this.navigationService.activeSection$.subscribe(
      (section) => {
        this.activeSection = section;
      },
    );
  }

  setActiveSection(section: string) {
    this.navigationService.setActiveSection(section);
    this.navigationService.navigateToSection(section);
    this.linkClicked.emit();
  }

  setLanguage(lang: string) {
    this.activeLanguageService.setLanguage(lang);
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
    this.sectionSub?.unsubscribe();
  }
}

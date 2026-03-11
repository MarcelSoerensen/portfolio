import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languageToggle.component.html',
  styleUrls: ['./languageToggle.component.scss'],
})
export class LanguageToggleComponent {
  @Input() selectedLanguage: string = 'de';
  @Input() setLanguage: (lang: string) => void = () => {};
  @Input() small: boolean = false;
}

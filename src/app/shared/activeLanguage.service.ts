import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActiveLanguageService {
  private languageSubject = new BehaviorSubject<string>(this.getInitialLang());
  language$ = this.languageSubject.asObservable();

  setLanguage(lang: string) {
    this.languageSubject.next(lang);
    localStorage.setItem('lang', lang);
  }

  getLanguage(): string {
    return this.languageSubject.value;
  }

  private getInitialLang(): string {
    return localStorage.getItem('lang') || 'en';
  }
}

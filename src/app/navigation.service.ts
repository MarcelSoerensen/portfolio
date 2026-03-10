import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private activeSectionSubject = new BehaviorSubject<string>('');
  activeSection$ = this.activeSectionSubject.asObservable();

  constructor(private router: Router) {}

  navigateToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.setActiveSection(section);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
          this.setActiveSection(section);
        }, 100);
      });
    }
  }

  setActiveSection(section: string): void {
    this.activeSectionSubject.next(section);
  }

  getActiveSection(): string {
    return this.activeSectionSubject.value;
  }
}

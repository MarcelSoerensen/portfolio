import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PageEffectsService {
  constructor(private router: Router) {}

  navigateAndSmoothScroll(path: string, fragment?: string, delay = 350) {
    this.router.navigate([path], { fragment }).then(() => {
      setTimeout(() => {
        if (fragment) {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, delay);
    });
  }
}

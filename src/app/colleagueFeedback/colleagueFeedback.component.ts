import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

type ColleagueFeedback = {
  nameKey: string;
  projectKey: string;
  quoteKey: string;
  linkedinUrl: string;
  backgroundDefaultSrc: string;
  backgroundHoverSrc: string;
};

@Component({
  selector: 'app-colleague-feedback',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './colleagueFeedback.component.html',
  styleUrls: ['./colleagueFeedback.component.scss']
})
export class ColleagueFeedbackComponent implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  showLeftScrollIndicator = false;
  showRightScrollIndicator = false;
  ngAfterViewInit() {
    this.updateScrollIndicator();
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.addEventListener('scroll', () => this.updateScrollIndicator());
      window.addEventListener('resize', () => this.updateScrollIndicator());
    }
  }

  updateScrollIndicator() {
    if (!this.scrollContainer) return;
    const el = this.scrollContainer.nativeElement;
    if (el.scrollWidth > el.clientWidth) {
      this.showLeftScrollIndicator = el.scrollLeft > 2;
      this.showRightScrollIndicator = el.scrollLeft + el.clientWidth < el.scrollWidth - 2;
    } else {
      this.showLeftScrollIndicator = false;
      this.showRightScrollIndicator = false;
    }
  }

  colleagueFeedbacks: ColleagueFeedback[] = [
    {
      nameKey: 'colleagueFeedback.items.feedback1.name',
      projectKey: 'colleagueFeedback.items.feedback1.project',
      quoteKey: 'colleagueFeedback.items.feedback1.quote',
      linkedinUrl: 'https://www.linkedin.com/in/colleague-1/',
      backgroundDefaultSrc: '/assets/backgrounds/bg_reference_default.svg',
      backgroundHoverSrc: '/assets/backgrounds/bg_reference_hover.svg',
    },
    {
      nameKey: 'colleagueFeedback.items.feedback2.name',
      projectKey: 'colleagueFeedback.items.feedback2.project',
      quoteKey: 'colleagueFeedback.items.feedback2.quote',
      linkedinUrl: 'https://www.linkedin.com/in/colleague-2/',
      backgroundDefaultSrc: '/assets/backgrounds/bg_reference_default.svg',
      backgroundHoverSrc: '/assets/backgrounds/bg_reference_hover.svg',
    },
    {
      nameKey: 'colleagueFeedback.items.feedback3.name',
      projectKey: 'colleagueFeedback.items.feedback3.project',
      quoteKey: 'colleagueFeedback.items.feedback3.quote',
      linkedinUrl: 'https://www.linkedin.com/in/colleague-3/',
      backgroundDefaultSrc: '/assets/backgrounds/bg_reference_default.svg',
      backgroundHoverSrc: '/assets/backgrounds/bg_reference_hover.svg',
    },
  ];
}

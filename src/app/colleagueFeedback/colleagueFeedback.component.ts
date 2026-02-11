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
export class ColleagueFeedbackComponent {

  colleagueFeedbacks: ColleagueFeedback[] = [
    {
      nameKey: 'colleagueFeedback.items.feedback1.name',
      projectKey: 'colleagueFeedback.items.feedback1.project',
      quoteKey: 'colleagueFeedback.items.feedback1.quote',
      linkedinUrl: 'https://www.linkedin.com/in/colleague-1/',
      backgroundDefaultSrc: '/assets/backgrounds/bg_reference_default.png',
      backgroundHoverSrc: '/assets/backgrounds/bg_reference_hover.png',
    },
    {
      nameKey: 'colleagueFeedback.items.feedback2.name',
      projectKey: 'colleagueFeedback.items.feedback2.project',
      quoteKey: 'colleagueFeedback.items.feedback2.quote',
      linkedinUrl: 'https://www.linkedin.com/in/colleague-2/',
      backgroundDefaultSrc: '/assets/backgrounds/bg_reference_default.png',
      backgroundHoverSrc: '/assets/backgrounds/bg_reference_hover.png',
    },
    {
      nameKey: 'colleagueFeedback.items.feedback3.name',
      projectKey: 'colleagueFeedback.items.feedback3.project',
      quoteKey: 'colleagueFeedback.items.feedback3.quote',
      linkedinUrl: 'https://www.linkedin.com/in/colleague-3/',
      backgroundDefaultSrc: '/assets/backgrounds/bg_reference_default.png',
      backgroundHoverSrc: '/assets/backgrounds/bg_reference_hover.png',
    },
  ];
}

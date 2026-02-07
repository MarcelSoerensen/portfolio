import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ColleagueFeedback = {
  name: string;
  project: string;
  quote: string;
  linkedinUrl: string;
  backgroundDefaultSrc: string;
  backgroundHoverSrc: string;
};

@Component({
  selector: 'app-colleague-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleagueFeedback.component.html',
  styleUrls: ['./colleagueFeedback.component.scss']
})
export class ColleagueFeedbackComponent {

  colleagueFeedbacks: ColleagueFeedback[] = [
    {
      name: 'Colleague Name',
      project: 'Team Chat App',
      quote:
        'Marcel is highly reliable, communicates clearly, and delivers UI work fast without sacrificing quality. Great teammate in reviews and debugging.',
      linkedinUrl: 'https://www.linkedin.com/in/colleague-1/',
      backgroundDefaultSrc: '/assets/backgrounds/bg_reference_default.png',
      backgroundHoverSrc: '/assets/backgrounds/bg_reference_hover.png',
    },
    {
      name: 'Colleague Name',
      project: 'Recipe Finder',
      quote:
        'He takes ownership, keeps tasks structured, and stays calm under pressure. Collaboration felt smooth and the handoffs were always clean.',
      linkedinUrl: 'https://www.linkedin.com/in/colleague-2/',
      backgroundDefaultSrc: '/assets/backgrounds/bg_reference_default.png',
      backgroundHoverSrc: '/assets/backgrounds/bg_reference_hover.png',
    },
    {
      name: 'Colleague Name',
      project: 'Group Project',
      quote:
        'Marcel is proactive and detail-oriented. He spots edge cases early and improves the overall UX with smart, simple solutions.',
      linkedinUrl: 'https://www.linkedin.com/in/colleague-3/',
      backgroundDefaultSrc: '/assets/backgrounds/bg_reference_default.png',
      backgroundHoverSrc: '/assets/backgrounds/bg_reference_hover.png',
    },
  ];
}

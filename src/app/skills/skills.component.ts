import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslocoModule, NgFor],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './skillsMobile.component.scss'],
})
export class SkillsComponent {

  skills = [
    { icon: '/assets/icons/skills/angular.svg', label: 'Angular' },
    { icon: '/assets/icons/skills/typescript.svg', label: 'TypeScript' },
    { icon: '/assets/icons/skills/javascript.svg', label: 'JavaScript' },
    { icon: '/assets/icons/skills/html.svg', label: 'HTML' },
    { icon: '/assets/icons/skills/css.svg', label: 'CSS' },
    { icon: '/assets/icons/skills/api.svg', label: 'API' },
    { icon: '/assets/icons/skills/firebase.svg', label: 'Firebase' },
    { icon: '/assets/icons/skills/git.svg', label: 'Git' },
    { icon: '/assets/icons/skills/materialdesign.svg', label: 'Material Design' },
    { icon: '/assets/icons/skills/scrum.svg', label: 'Scrum' }
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColleagueFeedbackComponent } from "../colleagueFeedback/colleagueFeedback.component";

type Technology = {
  name: string;
  iconSrc: string;
};

type ProjectCover = {
  src: string;
  alt: string;
};

type Project = {
  id: string;
  tabLabel: string;
  title: string;
  liveUrl: string;
  githubUrl: string;
  duration: string;
  durationLabel: string;
  aboutTitle: string;
  about: string;
  takeawaysTitle: string;
  takeaways: string;
  organisationTitle: string;
  organisation: string;
  technologiesTitle: string;
  technologies: Technology[];
  cover: ProjectCover;
};

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, ColleagueFeedbackComponent],
  templateUrl: './myProjects.component.html',
  styleUrls: ['./myProjects.component.scss']
})
export class MyProjectsComponent {
  activeIndex = 0;

  projects: Project[] = [
    {
      id: 'project-1',
      tabLabel: '1. Project',
      title: 'Team Chat App',
      liveUrl: 'https://your-domain.tld/team-chat-app',
      githubUrl: 'https://github.com/your-username/team-chat-app',
      duration: '4 Weeks',
      durationLabel: 'Duration:',
      aboutTitle: 'About the project',
      about:
        'A Slack-inspired team chat app focused on fast collaboration: real-time messaging, channels, and a clean, distraction-free UI.',
      organisationTitle: 'How I have organised my work process',
      organisation:
        'I broke the app into reusable components (navbar, channel list, message list, composer) and kept features in small, testable modules. Clear naming, consistent folder structure, and short PR-sized tasks helped keep the codebase maintainable.',
      takeawaysTitle: 'My group work experience',
      takeaways:
        'We were a team of 3. I implemented the chat UI (message list + composer), channel navigation, and state handling for switching channels. We coordinated via daily standups and short review cycles, which kept the collaboration smooth.',
      technologiesTitle: 'Technologies',
      technologies: [
        { name: 'Angular', iconSrc: '/assets/icons/skills/angular.png' },
        { name: 'TypeScript', iconSrc: '/assets/icons/skills/typescript.png' },
        { name: 'SCSS', iconSrc: '/assets/icons/skills/css.png' },
      ],
      cover: { src: '/assets/backgrounds/bg_skill_default.png', alt: 'Cover Project 1' },
    },
    {
      id: 'project-2',
      tabLabel: '2. Project',
      title: 'Kanban Task Board',
      liveUrl: 'https://your-domain.tld/kanban-task-board',
      githubUrl: 'https://github.com/your-username/kanban-task-board',
      duration: '2 Weeks',
      durationLabel: 'Duration:',
      aboutTitle: 'About the project',
      about:
        'A lightweight Kanban board to manage tasks with columns, drag & drop, quick edits, and an overview that stays readable even with many cards.',
      organisationTitle: 'How I have organised my work process',
      organisation:
        'I started with a clear data model (board → columns → cards) and built the UI from small components. I used consistent naming and kept logic out of templates by moving it into helper methods, which made refactoring painless.',
      takeawaysTitle: 'What I have learnt',
      takeaways:
        'I learned how to model UI state cleanly (selected card, filtered view, edit mode) and how to keep components focused. It also improved my CSS structure (spacing system, reusable classes) and TypeScript typing for predictable code.',
      technologiesTitle: 'Technologies',
      technologies: [
        { name: 'Angular', iconSrc: '/assets/icons/skills/angular.png' },
        { name: 'TypeScript', iconSrc: '/assets/icons/skills/typescript.png' },
      ],
      cover: { src: '/assets/backgrounds/bg_skill_default.png', alt: 'Cover Project 2' },
    },
    {
      id: 'project-3',
      tabLabel: '3. Project',
      title: 'Recipe Finder',
      liveUrl: 'https://your-domain.tld/recipe-finder',
      githubUrl: 'https://github.com/your-username/recipe-finder',
      duration: '3 Weeks',
      durationLabel: 'Duration:',
      aboutTitle: 'About the project',
      about:
        'A recipe search app that lets users discover meals by ingredients, view details, and save favorites. The focus is on clarity, speed, and a friendly UI.',
      organisationTitle: 'How I have organised my work process',
      organisation:
        'We split the app into feature slices (search, detail, favorites) and aligned on naming conventions early. I documented component responsibilities and kept API calls in one service to avoid duplication.',
      takeawaysTitle: 'My group work experience',
      takeaways:
        'We worked in a team of 2. I built the search + results UI and integrated the API service, while my teammate handled routing and the favorites view. Pair debugging and quick code reviews helped us stay consistent.',
      technologiesTitle: 'Technologies',
      technologies: [{ name: 'Angular', iconSrc: '/assets/icons/skills/angular.png' }],
      cover: { src: '/assets/backgrounds/bg_skill_default.png', alt: 'Cover Project 3' },
    },
    {
      id: 'project-4',
      tabLabel: '4. Project',
      title: 'Portfolio Website',
      liveUrl: 'https://your-domain.tld/portfolio',
      githubUrl: 'https://github.com/your-username/portfolio',
      duration: '1 Week',
      durationLabel: 'Duration:',
      aboutTitle: 'About the project',
      about:
        'A responsive portfolio website to present my projects, skills, and contact information with clear navigation, smooth scrolling, and consistent styling.',
      organisationTitle: 'How I have organised my work process',
      organisation:
        'I created a small design system (colors, spacing, typography) and reused components (navbar, sections, cards). I iterated in small steps and kept styles modular to avoid side effects across sections.',
      takeawaysTitle: 'What I have learnt',
      takeaways:
        'I improved my responsive layout skills (flex/grid + clamp) and learned to avoid “CSS drift” by using consistent spacing and reusable class patterns. I also got better at structuring sections for accessibility and readability.',
      technologiesTitle: 'Technologies',
      technologies: [{ name: 'TypeScript', iconSrc: '/assets/icons/skills/typescript.png' }],
      cover: { src: '/assets/backgrounds/bg_skill_default.png', alt: 'Cover Project 4' },
    },
  ];

  get activeProject(): Project {
    return this.projects[this.activeIndex];
  }

  setActiveProject(index: number) {
    this.activeIndex = index;
  }
}

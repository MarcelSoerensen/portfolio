import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColleagueFeedbackComponent } from "../colleagueFeedback/colleagueFeedback.component";
import { TranslocoModule } from '@jsverse/transloco';

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
  tabLabelKey: string;
  titleKey: string;
  liveUrl: string;
  githubUrl: string;
  durationKey: string;
  aboutKey: string;
  takeawaysKey: string;
  organisationKey: string;
  technologies: Technology[];
  cover: ProjectCover;
};

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, ColleagueFeedbackComponent, TranslocoModule],
  templateUrl: './myProjects.component.html',
  styleUrls: ['./myProjects.component.scss']
})
export class MyProjectsComponent {
  activeIndex = 0;

  projects: Project[] = [
    {
      id: 'project-1',
      tabLabelKey: 'myProjects.projects.project1.tabLabel',
      titleKey: 'myProjects.projects.project1.title',
      liveUrl: 'https://your-domain.tld/team-chat-app',
      githubUrl: 'https://github.com/your-username/team-chat-app',
      durationKey: 'myProjects.projects.project1.duration',
      aboutKey: 'myProjects.projects.project1.about',
      organisationKey: 'myProjects.projects.project1.organisation',
      takeawaysKey: 'myProjects.projects.project1.takeaways',
      technologies: [
        { name: 'Angular', iconSrc: '/assets/icons/skills/angular.png' },
        { name: 'TypeScript', iconSrc: '/assets/icons/skills/typescript.png' },
        { name: 'SCSS', iconSrc: '/assets/icons/skills/css.png' },
      ],
      cover: { src: '/assets/backgrounds/bg_skill_default.png', alt: 'Cover Project 1' },
    },
    {
      id: 'project-2',
      tabLabelKey: 'myProjects.projects.project2.tabLabel',
      titleKey: 'myProjects.projects.project2.title',
      liveUrl: 'https://your-domain.tld/kanban-task-board',
      githubUrl: 'https://github.com/your-username/kanban-task-board',
      durationKey: 'myProjects.projects.project2.duration',
      aboutKey: 'myProjects.projects.project2.about',
      organisationKey: 'myProjects.projects.project2.organisation',
      takeawaysKey: 'myProjects.projects.project2.takeaways',
      technologies: [
        { name: 'Angular', iconSrc: '/assets/icons/skills/angular.png' },
        { name: 'TypeScript', iconSrc: '/assets/icons/skills/typescript.png' },
      ],
      cover: { src: '/assets/backgrounds/bg_skill_default.png', alt: 'Cover Project 2' },
    },
    {
      id: 'project-3',
      tabLabelKey: 'myProjects.projects.project3.tabLabel',
      titleKey: 'myProjects.projects.project3.title',
      liveUrl: 'https://your-domain.tld/recipe-finder',
      githubUrl: 'https://github.com/your-username/recipe-finder',
      durationKey: 'myProjects.projects.project3.duration',
      aboutKey: 'myProjects.projects.project3.about',
      organisationKey: 'myProjects.projects.project3.organisation',
      takeawaysKey: 'myProjects.projects.project3.takeaways',
      technologies: [{ name: 'Angular', iconSrc: '/assets/icons/skills/angular.png' }],
      cover: { src: '/assets/backgrounds/bg_skill_default.png', alt: 'Cover Project 3' },
    },
    {
      id: 'project-4',
      tabLabelKey: 'myProjects.projects.project4.tabLabel',
      titleKey: 'myProjects.projects.project4.title',
      liveUrl: 'https://your-domain.tld/portfolio',
      githubUrl: 'https://github.com/your-username/portfolio',
      durationKey: 'myProjects.projects.project4.duration',
      aboutKey: 'myProjects.projects.project4.about',
      organisationKey: 'myProjects.projects.project4.organisation',
      takeawaysKey: 'myProjects.projects.project4.takeaways',
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

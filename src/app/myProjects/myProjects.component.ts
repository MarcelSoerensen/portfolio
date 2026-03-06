import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColleagueFeedbackComponent } from '../colleagueFeedback/colleagueFeedback.component';
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
  tabLabelMobile: string;
  titleKey: string;
  liveUrl: string;
  githubUrl: string;
  durationKey: string;
  aboutKey: string;
  organisationTitleKey: string;
  takeawaysTitleKey: string;
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
  styleUrls: ['./myProjects.component.scss', './myProjectsMobile.component.scss'],
})
export class MyProjectsComponent {
  activeIndex = 0;

  projects: Project[] = [
    {
      id: 'project-1',
      tabLabelKey: 'myProjects.projects.project1.tabLabel',
      tabLabelMobile: 'myProjects.projects.project1.tabLabelMobile',
      titleKey: 'myProjects.projects.project1.title',
      liveUrl: 'https://madscientist.marcel-soerensen.com/',
      githubUrl: 'https://github.com/MarcelSoerensen/MadScientist.git',
      durationKey: 'myProjects.projects.project1.duration',
      aboutKey: 'myProjects.projects.project1.about',
      organisationTitleKey: 'myProjects.projects.project1.organisationTitle',
      takeawaysTitleKey: 'myProjects.projects.project1.takeawaysTitle',
      organisationKey: 'myProjects.projects.project1.organisation',
      takeawaysKey: 'myProjects.projects.project1.takeaways',
      technologies: [
        { name: 'HTML', iconSrc: '/assets/icons/skills/html.png' },
        { name: 'JavaScript', iconSrc: '/assets/icons/skills/javascript.png' },
        { name: 'SCSS', iconSrc: '/assets/icons/skills/css.png' },
      ],
      cover: { src: '/assets/cover/mad_scientist.png', alt: 'Cover Project 1' },
    },
    {
      id: 'project-2',
      tabLabelKey: 'myProjects.projects.project2.tabLabel',
      tabLabelMobile: 'myProjects.projects.project2.tabLabelMobile',
      titleKey: 'myProjects.projects.project2.title',
      liveUrl: 'https://join.marcel-soerensen.com/',
      githubUrl: 'https://github.com/MarcelSoerensen/Join.git',
      durationKey: 'myProjects.projects.project2.duration',
      aboutKey: 'myProjects.projects.project2.about',
      organisationTitleKey: 'myProjects.projects.project2.organisationTitle',
      takeawaysTitleKey: 'myProjects.projects.project2.takeawaysTitle',
      organisationKey: 'myProjects.projects.project2.organisation',
      takeawaysKey: 'myProjects.projects.project2.takeaways',
      technologies: [
        { name: 'HTML', iconSrc: '/assets/icons/skills/html.png' },
        { name: 'JavaScript', iconSrc: '/assets/icons/skills/javascript.png' },
        { name: 'CSS', iconSrc: '/assets/icons/skills/css.png' },
        { name: 'Firebase', iconSrc: '/assets/icons/skills/firebase.png' },
      ],
      cover: {
        src: '/assets/cover/join.png',
        alt: 'Cover Project 2',
      },
    },
    {
      id: 'project-3',
      tabLabelKey: 'myProjects.projects.project3.tabLabel',
      tabLabelMobile: 'myProjects.projects.project3.tabLabelMobile',
      titleKey: 'myProjects.projects.project3.title',
      liveUrl: 'https://pokedex.marcel-soerensen.com/',
      githubUrl: 'https://github.com/MarcelSoerensen/pokedex.git',
      durationKey: 'myProjects.projects.project3.duration',
      aboutKey: 'myProjects.projects.project3.about',
      organisationTitleKey: 'myProjects.projects.project3.organisationTitle',
      takeawaysTitleKey: 'myProjects.projects.project3.takeawaysTitle',
      organisationKey: 'myProjects.projects.project3.organisation',
      takeawaysKey: 'myProjects.projects.project3.takeaways',
      technologies: [
        { name: 'HTML', iconSrc: '/assets/icons/skills/html.png' },
        { name: 'JavaScript', iconSrc: '/assets/icons/skills/javascript.png' },
        { name: 'CSS', iconSrc: '/assets/icons/skills/css.png' },
      ],
      cover: {
        src: '/assets/cover/pokedex.png',
        alt: 'Cover Project 3',
      },
    },
    {
      id: 'project-4',
      tabLabelKey: 'myProjects.projects.project4.tabLabel',
      tabLabelMobile: 'myProjects.projects.project4.tabLabelMobile',
      titleKey: 'myProjects.projects.project4.title',
      liveUrl: 'https://join.marcel-soerensen.com',
      githubUrl: 'https://github.com/your-username/portfolio',
      durationKey: 'myProjects.projects.project4.duration',
      aboutKey: 'myProjects.projects.project4.about',
      organisationTitleKey: 'myProjects.projects.project4.organisationTitle',
      takeawaysTitleKey: 'myProjects.projects.project4.takeawaysTitle',
      organisationKey: 'myProjects.projects.project4.organisation',
      takeawaysKey: 'myProjects.projects.project4.takeaways',
      technologies: [
        { name: 'TypeScript', iconSrc: '/assets/icons/skills/typescript.png' },
      ],
      cover: {
        src: '/assets/backgrounds/bg_skill_default.png',
        alt: 'Cover Project 4',
      },
    },
  ];

  get activeProject(): Project {
    return this.projects[this.activeIndex];
  }

  setActiveProject(index: number) {
    this.activeIndex = index;
  }
}

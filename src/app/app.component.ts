import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { WhyMeComponent } from './whyMe/whyMe.component';
import { SkillsComponent } from './skills/skills.component';
import { MyProjectsComponent } from './myProjects/myProjects.component';
import { ColleagueFeedbackComponent } from './colleagueFeedback/colleagueFeedback.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LandingPageComponent,
    WhyMeComponent,
    SkillsComponent,
    MyProjectsComponent,
    ColleagueFeedbackComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyMeComponent } from '../../whyMe/whyMe.component';
import { SkillsComponent } from '../../skills/skills.component';
import { MyProjectsComponent } from '../../myProjects/myProjects.component';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    WhyMeComponent,
    SkillsComponent,
    MyProjectsComponent
  ],
  templateUrl: './landingPageContent.component.html',
  styleUrls: ['./landingPageContent.component.scss']
})
export class LandingPageContentComponent {

}

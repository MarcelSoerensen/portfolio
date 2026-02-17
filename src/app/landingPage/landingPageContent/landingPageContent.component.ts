import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyMeComponent } from '../../whyMe/whyMe.component';
import { SkillsComponent } from '../../skills/skills.component';
import { MyProjectsComponent } from '../../myProjects/myProjects.component';
import { ContactMeComponent } from '../../contactMe/contactMe.component';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    WhyMeComponent,
    SkillsComponent,
    MyProjectsComponent,
    ContactMeComponent
  ],
  templateUrl: './landingPageContent.component.html',
  styleUrls: ['./landingPageContent.component.scss']
})
export class LandingPageContentComponent {

}

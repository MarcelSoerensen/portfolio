import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyMeComponent } from '../../whyMe/whyMe.component';
import { SkillsComponent } from '../../skills/skills.component';
import { MyProjectsComponent } from '../../myProjects/myProjects.component';
import { ContactformComponent } from '../../contactform/contactform.component';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    WhyMeComponent,
    SkillsComponent,
    MyProjectsComponent,
    ContactformComponent
  ],
  templateUrl: './landingPageContent.component.html',
  styleUrls: ['./landingPageContent.component.scss']
})
export class LandingPageContentComponent {

}

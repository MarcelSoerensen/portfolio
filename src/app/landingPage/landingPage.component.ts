import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLogoComponent } from '../profileLogo/profileLogo.component';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [
    CommonModule,
    ProfileLogoComponent,
  ],
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.scss', './landingPageMobile.component.scss'],
})
export class LandingPageComponent {}

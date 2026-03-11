import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profileLogo.component.html',
  styleUrls: ['./profileLogo.component.scss']
})
export class ProfileLogoComponent {
  @Input() logoSrc: string = 'assets/icons/logo_vector_dark.svg';
  @Input() light: boolean = false;

}


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-back-to-home-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './backToHomeButton.component.html',
  styleUrls: ['./backToHomeButton.component.scss']
})
export class BackToHomeButtonComponent {
  constructor(private router: Router) {}
}

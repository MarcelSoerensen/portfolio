import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-whyMe',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './whyMe.component.html',
  styleUrls: ['./whyMe.component.scss']
})
export class WhyMeComponent {

}

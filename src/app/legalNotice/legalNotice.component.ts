import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './legalNotice.component.html',
  styleUrl: './legalNotice.component.scss'
})
export class LegalNoticeComponent {

}

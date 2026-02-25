import { Component } from '@angular/core';
import { BackToHomeButtonComponent } from '../backToHomeButton/backToHomeButton.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslocoModule, BackToHomeButtonComponent],
  templateUrl: './legalNotice.component.html',
  styleUrls: ['./legalNotice.component.scss', '../legalAndPrivacy.scss']
})
export class LegalNoticeComponent {

}

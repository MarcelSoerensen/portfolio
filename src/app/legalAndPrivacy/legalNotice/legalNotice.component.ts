import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './legalNotice.component.html',
  styleUrls: ['./legalNotice.component.scss', '../legalAndPrivacy.scss']
})
export class LegalNoticeComponent {

}

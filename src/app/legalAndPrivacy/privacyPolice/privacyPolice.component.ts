import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-privacy-police',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './privacyPolice.component.html',
  styleUrls: ['./privacyPolice.component.scss', '../legalAndPrivacy.scss']
})
export class PrivacyPoliceComponent {

}

import { Component } from '@angular/core';
import { BackToHomeButtonComponent } from '../backToHomeButton/backToHomeButton.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-privacy-police',
  standalone: true,
  imports: [TranslocoModule, BackToHomeButtonComponent],
  templateUrl: './privacyPolice.component.html',
  styleUrls: ['./privacyPolice.component.scss', '../legalAndPrivacy.scss']
})
export class PrivacyPoliceComponent {

}

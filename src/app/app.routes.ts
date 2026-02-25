import { Routes } from '@angular/router';
import { LandingPageContentComponent } from './landingPage/landingPageContent/landingPageContent.component';
import { LegalNoticeComponent } from './legalAndPrivacy/legalNotice/legalNotice.component';
import { PrivacyPoliceComponent } from './legalAndPrivacy/privacyPolice/privacyPolice.component';

export const routes: Routes = [
    { path: '', component: LandingPageContentComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'privacy-police', component: PrivacyPoliceComponent }
];

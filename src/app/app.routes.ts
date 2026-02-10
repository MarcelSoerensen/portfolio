import { Routes } from '@angular/router';
import { LandingPageContentComponent } from './landingPage/landingPageContent/landingPageContent.component';
import { LegalNoticeComponent } from './legalNotice/legalNotice.component';

export const routes: Routes = [
    { path: '', component: LandingPageContentComponent },
    { path: 'legal-notice', component: LegalNoticeComponent }
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

import { UserComponent} from './user.component';
import { InfoComponent } from './info/info.component';
import { InfoBySchoolComponent } from './info-by-school/info-by-school.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RecruitmentComponent} from './recruitment/recruitment.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InternInfoComponent } from './intern-info/intern-info.component';
import { ViewPartnerComponent } from './view-partner/view-partner.component';
import { InboxComponent } from './inbox/inbox.component';
import { SendComponent } from './inbox/send/send.component';

export const routes: Routes = [
  { path: '', redirectTo: 'recruitment', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'info-school', component: InfoBySchoolComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'recruitment', component: RecruitmentComponent },
  { path: 'intern-info', component: InternInfoComponent},
  { path: 'viewpartner', component: ViewPartnerComponent},
  { path: 'inbox', component: InboxComponent},
  { path: 'send-message', component: SendComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    UserComponent,
    InfoComponent,
    InfoBySchoolComponent,
    ChangePasswordComponent,
    NavbarComponent,
    RecruitmentComponent,
    NavigationComponent,
    InternInfoComponent,
    ViewPartnerComponent,
    InboxComponent,
    SendComponent
  ],
  exports: [
    UserComponent,
    InfoComponent,
    InfoBySchoolComponent,
    ChangePasswordComponent,
    RecruitmentComponent,
    InternInfoComponent,
    ViewPartnerComponent,
    InboxComponent,
    SendComponent
  ],
})
export class UserModule { }

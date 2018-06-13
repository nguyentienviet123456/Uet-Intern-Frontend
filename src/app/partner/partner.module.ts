import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';
import { PartnerComponent } from './partner.component';
import { StudentsComponent } from './students/students.component';
import { InboxComponent } from './inbox/inbox.component';
import { PhasesComponent } from './phases/phases.component';
import { NavbarPartnerComponent } from './navbar-partner/navbar-partner.component';
import { InfoComponent } from './info/info.component';


export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students',component: StudentsComponent},
  { path: 'inbox',component: InboxComponent},
  { path: 'phases',component: PhasesComponent},
  { path: 'info', component: InfoComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
  PartnerComponent,
  StudentsComponent,
  InboxComponent,
  PhasesComponent,
  NavbarPartnerComponent,
  InfoComponent],
  exports: [
  ]
})
export class PartnerModule { }

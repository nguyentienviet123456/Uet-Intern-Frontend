import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

import { AdminComponent } from './admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { StudentsComponent } from './students/students.component';
import { LecturersComponent } from './lecturers/lecturers.component';
import { PartnersComponent } from './partners/partners.component';
import { PhasesComponent } from './phases/phases.component';
import { InboxComponent } from './inbox/inbox.component';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent},
  { path: 'partners', component: PartnersComponent},
  { path: 'lecturers', component: LecturersComponent},
  { path: 'phases', component: PhasesComponent},
  { path: 'inbox', component: InboxComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    AdminComponent,
    NavbarAdminComponent,
    StudentsComponent,
    LecturersComponent,
    PartnersComponent,
    PhasesComponent,
    InboxComponent
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }

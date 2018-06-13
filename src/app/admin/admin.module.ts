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

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin',component: AdminComponent}
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminComponent,
    NavbarAdminComponent,
    StudentsComponent,
    LecturersComponent,
    PartnersComponent,
    PhasesComponent
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }

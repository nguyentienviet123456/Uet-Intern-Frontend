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
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { PagerService } from '../pager.service';
import { HttpModule } from '@angular/http';


export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent},
  { path: 'student/:id', component: StudentDetailComponent},
  { path: 'partners', component: PartnersComponent},
  { path: 'lecturers', component: LecturersComponent},
  { path: 'phases', component: PhasesComponent},
  { path: 'inbox', component: InboxComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GridModule,
    HttpModule
  ],
  declarations: [
    AdminComponent,
    NavbarAdminComponent,
    StudentsComponent,
    LecturersComponent,
    PartnersComponent,
    PhasesComponent,
    InboxComponent,
    StudentDetailComponent
  ],
  exports: [
    AdminComponent
  ],
  providers: [
    PagerService
  ]
})
export class AdminModule { }

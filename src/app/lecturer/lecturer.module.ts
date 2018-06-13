import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

import { LecturerComponent } from './lecturer.component';
import { NavbarLecturerComponent } from './navbar-lecturer/navbar-lecturer.component';
import { InfoLecturerComponent } from './info-lecturer/info-lecturer.component';
import { LecturerStudentsComponent } from './lecturer-students/lecturer-students.component';
import { LecturerStudentReportComponent } from './lecturer-student-report/lecturer-student-report.component';
import { LecturerReportAdminComponent } from './lecturer-report-admin/lecturer-report-admin.component';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'info',component: InfoLecturerComponent},
  {
    path: 'students', component: LecturerStudentsComponent
  },
  { path: 'report-admin', component: LecturerReportAdminComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    LecturerComponent,
    NavbarLecturerComponent,
    InfoLecturerComponent,
    LecturerStudentsComponent,
    LecturerStudentReportComponent,
    LecturerReportAdminComponent
  ],
  exports: [
    LecturerComponent
  ]
})
export class LecturerModule { }

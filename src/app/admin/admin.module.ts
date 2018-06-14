import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { FormsModule } from '@angular/forms';
import { NewstudentComponent } from './student-detail/newstudent/newstudent.component';
import { LecturerDetailComponent } from './lecturer-detail/lecturer-detail.component';
import { NewlecturerComponent } from './lecturer-detail/newlecturer/newlecturer.component';
import { PartnerDetailComponent } from './partner-detail/partner-detail.component';
import { NewpartnerComponent } from './partner-detail/newpartner/newpartner.component';
import { AdminService } from '../services/admin.service';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { NewadminComponent } from './admin-detail/newadmin/newadmin.component';
import { AdminsComponent } from './admins/admins.component';
import { PhaseDetailComponent } from './phase-detail/phase-detail.component';
import { NewphaseComponent } from './phase-detail/newphase/newphase.component';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent},
  { path: 'student/:id', component: StudentDetailComponent},
  { path: 'partners', component: PartnersComponent},
  { path: 'lecturers', component: LecturersComponent},
  { path: 'phases', component: PhasesComponent},
  { path: 'inbox', component: InboxComponent},
  { path: 'newstudent', component: NewstudentComponent},
  { path: 'lecturer/:id', component: LecturerDetailComponent},
  { path: 'newlecturer', component: NewlecturerComponent},
  { path: 'partner/:id', component: PartnerDetailComponent},
  { path: 'newpartner', component: NewpartnerComponent},
  { path: 'admins', component: AdminsComponent},
  { path: 'admin/:id', component: AdminDetailComponent},
  { path: 'newadmin', component: NewadminComponent},
  { path: 'phase/:id', component: PhaseDetailComponent},
  { path: 'newphase', component: NewphaseComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GridModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastModule.forRoot()
  ],
  declarations: [
    AdminComponent,
    NavbarAdminComponent,
    StudentsComponent,
    LecturersComponent,
    PartnersComponent,
    PhasesComponent,
    InboxComponent,
    StudentDetailComponent,
    NewstudentComponent,
    LecturerDetailComponent,
    NewlecturerComponent,
    PartnerDetailComponent,
    NewpartnerComponent,
    AdminDetailComponent,
    NewadminComponent,
    AdminsComponent,
    PhaseDetailComponent,
    NewphaseComponent
  ],
  exports: [
    AdminComponent
  ],
  providers: [
    PagerService,
    AdminService
  ]
})
export class AdminModule { }

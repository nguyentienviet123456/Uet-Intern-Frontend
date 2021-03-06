import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  routes as UserChildRoutes,
  UserModule
} from './user/user.module';

import {
  routes as PartnerChildRoutes,
  PartnerModule
} from './partner/partner.module'

import {
  routes as AdminChilRoutes,
  AdminModule
} from './admin/admin.module'

import {
  routes as LecturerChilRoutes,
  LecturerModule
} from './lecturer/lecturer.module'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuardUser } from './logged-in.guard';
import { LoggedInGuardAdmin } from './admin.guard';
import { AUTH_PROVIDERS } from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './user/info/info.component';
import { InfoBySchoolComponent } from './user/info-by-school/info-by-school.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { UserComponent } from './user/user.component';
import { RecruitmentComponent} from './user/recruitment/recruitment.component';
import { InternInfoComponent} from './user/intern-info/intern-info.component';
import { ViewPartnerComponent} from './user/view-partner/view-partner.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { LecturerComponent } from './lecturer/lecturer.component'
import { NotauthorizityComponent } from './notauthorizity/notauthorizity.component'
import { LoginGuard } from './login.guard';
import { LecturerGuard } from './lecturer.guard';
import { PartnerGuard } from './partner.guard';
import { AdminComponent } from './admin/admin.component';
import { PartnerComponent } from './partner/partner.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ToasterServiceService } from './toaster-service.service';
import { UserService } from './services/user.service';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'user',
    component: UserComponent,
    children: UserChildRoutes,
    canActivate: [LoggedInGuardUser]
  },
  {
    path: 'partner',
    component: PartnerComponent,
    children: PartnerChildRoutes,
    canActivate: [PartnerGuard]
  },
  {
    path: 'lecturer',
    component: LecturerComponent,
    children: LecturerChilRoutes,
    canActivate: [LecturerGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: AdminChilRoutes,
    canActivate: [LoggedInGuardAdmin]
  },
  { path: 'notauthor', component: NotauthorizityComponent},
  { path: '**', component: Notfound404Component},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Notfound404Component,
    NotauthorizityComponent,
    // HomeComponent,
    // NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UserModule,
    PartnerModule,
    LecturerModule,
    AdminModule,
    GridModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuardUser,
    LoggedInGuardAdmin,
    PartnerGuard,
    LecturerGuard,
    LoginGuard,
    ToasterServiceService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

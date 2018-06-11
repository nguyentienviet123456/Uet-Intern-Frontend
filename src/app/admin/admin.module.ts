import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin',component: AdminComponent}
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminComponent
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }

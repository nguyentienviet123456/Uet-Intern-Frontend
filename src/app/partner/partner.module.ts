import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

import { PartnerComponent } from './partner/partner.component';

export const routes: Routes = [
  { path: '', redirectTo: 'partner', pathMatch: 'full' },
  { path: 'partner',component: PartnerComponent}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PartnerComponent
  ],
  exports: [
    PartnerComponent
  ]
})
export class PartnerModule { }

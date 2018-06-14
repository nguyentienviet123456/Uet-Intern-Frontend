import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { AdminService } from '../../services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToasterServiceService } from '../../toaster-service.service';

@Component({
  selector: 'app-phase-detail',
  templateUrl: './phase-detail.component.html',
  styleUrls: ['./phase-detail.component.css']
})
export class PhaseDetailComponent implements OnInit {

  phaseId : any;
  Student : any[];
  token: any;
  name: string;
  year: string;
  status: string;
  constructor(private _activedRoute: ActivatedRoute,
    private _adminService: AdminService,
    private _spinner: NgxSpinnerService,
    private _router: Router,
    private _toasterService: ToasterServiceService,
  ) {
    this._activedRoute.params.subscribe( params => {
      console.log(params);
      this.phaseId = params.id;
    });
}
  ngOnInit() {
    this.token = "JWT " + localStorage.getItem('token');
  }

  UpdatePhase(){
    this._spinner.show();
    let body = {
      name : this.name,
      year : this.year,
      status : this.status
    }
    this._adminService.UpdatePhase(this.phaseId,this.token, body).subscribe(res => {
      if(res !== null || res !== undefined){
        this._spinner.hide();
        this._toasterService.Success('Update!', 'Success!');
        console.log(res);
      }
    });this._spinner.hide();
  }

}

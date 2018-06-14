import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-newphase',
  templateUrl: './newphase.component.html',
  styleUrls: ['./newphase.component.css']
})
export class NewphaseComponent implements OnInit {
  token: any;
  name: string;
  year: string;
  status: string;
  constructor(private _activedRoute: ActivatedRoute,
    private _adminService: AdminService,
    private _spinner: NgxSpinnerService,
    private _router: Router
  ) {
}
  ngOnInit() {
    this.token = "JWT " + localStorage.getItem('token');
  }

  CreatePhase(){
    this._spinner.show();
    let body = {
      name : this.name,
      year : this.year,
    }
    this._adminService.CreatePhase(this.token, body).subscribe(res => {
      if(res !== null || res !== undefined){
        this._spinner.hide();
        console.log(res);
      }
    })
    this._spinner.hide();
  }

}

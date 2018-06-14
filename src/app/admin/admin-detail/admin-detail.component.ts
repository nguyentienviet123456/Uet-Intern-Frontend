import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { AdminService } from '../../services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  studentId : any;
  Student : any[];
  token: any;
  constructor(private _activedRoute: ActivatedRoute,
    private _adminService: AdminService,
    private _spinner: NgxSpinnerService,
    private _router: Router
  ) {
    this._activedRoute.params.subscribe( params => {
      console.log(params);
      this.studentId = params.id;
    });
}
  ngOnInit() {
    this.token = "JWT " + localStorage.getItem('token');
    this._spinner.show();
    this._adminService.GetStudentById(this.studentId, this.token).subscribe(res => {
      if(res !== null || res !== undefined){
        console.log(res);
        this.Student = res;
        this._spinner.hide();
      }
    })
  }

  UpdateDateStudent(){
    this._spinner.show();
    this._adminService.UpdateStudent(this.studentId,this.token, this.Student).subscribe(res => {
      if(res !== null || res !== undefined){
        this._spinner.hide();
        console.log(res);
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AdminService } from '../../../services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newlecturer',
  templateUrl: './newlecturer.component.html',
  styleUrls: ['./newlecturer.component.css']
})
export class NewlecturerComponent implements OnInit {

  username: string;
    email: string;
    role: string;
    fullname: string;
    birth: string;
    sdt: string;
    lop: string;
    khoa: string;
    nganh: string;
    gpa: string;
    nam_tot_nghiep: string;
    skype_id: string;
    fb_di: string;
    ngoai_ngu: string;
    chung_chi: string;
    kinh_nghiem: string;
    contact: string;
    bomon: string;

  constructor(private http: Http,
    private _adminService: AdminService,
    private _spinner: NgxSpinnerService,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  CreateStudent() {
    this._spinner.show();
     let body = ({
      username: this.username,
      email: this.email,
      fullname: this.fullname,
      birth: this.birth,
      sdt: this.sdt,
      lop: this.lop,
      khoa: this.khoa,
      nganh: this.nganh,
      gpa: this.gpa,
      nam_tot_nghiep: this.nam_tot_nghiep,
      bomon: this.bomon,
    });
    let token = "JWT " + localStorage.getItem('token');
    this._adminService.CreateNewUser('lecturer', token, body).subscribe(data => {
      if(data !== null || data !== undefined){
        this._spinner.hide();
        console.log(data);
      }
      else{
        this._spinner.hide();
      }
    })
    this._spinner.hide();
  }

}

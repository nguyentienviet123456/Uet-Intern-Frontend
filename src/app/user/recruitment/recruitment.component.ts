import { Component, OnInit } from '@angular/core';
import { PagerService } from '../../pager.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AdminService } from '../../services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToasterServiceService } from '../../toaster-service.service';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  companyName: string;
  companyAddress: string;
  companyEmail: string;
  companyPhone: string;
  showNavigate = false;
  constructor(private http: Http, 
    private pagerService: PagerService,
    private _adminService: AdminService,
    private _spinner: NgxSpinnerService,
    private _router: Router,
    private _toasterService: ToasterServiceService,
  ) { }

   // array of all items to be paged
   private allItems: any[];

   // pager object
   pager: any = {};

   // paged items
   pagedItems: any[];

   ngOnInit() {
    let token = "JWT " + localStorage.getItem('token');
    this._spinner.show();
    this._adminService.GetPosts(token).subscribe(res =>{
      if(res !== undefined){
        this.allItems = res;
        this._spinner.hide();
      }
      this.setPage(1);
    })
   }

   setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
   }

  RegisterCompany(){
    console.log(this.companyAddress);
  }

  Follow(id: string){
    this._spinner.show();
    let token = "JWT " + localStorage.getItem('token');
    this._adminService.FollowPost(id, token).subscribe(data => {
      if(data !== null || data !== undefined){
        this._spinner.hide();
        console.log(data);
      }
      else{
        this._spinner.hide();
      }
    });
    this._spinner.hide();
    this._toasterService.Error('Follow!', 'Fail!');
  }
}

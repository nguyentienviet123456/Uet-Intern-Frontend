import { Component, OnInit } from '@angular/core';
import { PagerService } from '../../pager.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { samples } from './Samples';
import { AdminService } from '../../services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private http: Http, 
    private pagerService: PagerService,
    private _adminService: AdminService,
    private _spinner: NgxSpinnerService
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
    this._adminService.GetByRole('sinhvien', token).subscribe(res =>{
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

}

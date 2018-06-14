import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToasterServiceService } from '../../toaster-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  oldPass: string;
  newPass: string;
  constructor(private authService: AuthService,
    public _router: Router,
    private _spinner: NgxSpinnerService,
    private _toasterService: ToasterServiceService,
  ) {
  }

  ngOnInit() {
  }
  ChangePass(){
    this._spinner.show();
    let token = "JWT "+localStorage.getItem('token');
    this.authService.ChangePassWord(this.oldPass, this.newPass,token ).subscribe(data => {
      if(data !== null || data !== undefined){
        this._spinner.hide();
        this._toasterService.Success('Change Password!', 'Success!');
        console.log(data);
      }
    })
  }
}

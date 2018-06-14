import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToasterServiceService } from '../toaster-service.service';
import { UserService } from '../services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  username: string;
  userpassword: string;
  private token: string;

  constructor(private authService: AuthService,
    public _router: Router,
    private _toasterService: ToasterServiceService,
    private _userService: UserService,
    private _spinner: NgxSpinnerService
  ) {
    this.message = '';
  }

  ngOnInit() {
  }

  /**
   * @param  {string} username
   * @param  {string} password
   */
  login(username: string, password: string) {
    this._spinner.show();
    username = this.username;
    password = this.userpassword;
    this.message = '';
    try{
      this.authService.AuthenticateUser(username, password).subscribe(data =>{
        if(data !== null || data !== undefined){
          this.token = data.token;
          this.authService.StoreUserData(this.token);
          this.token ="JWT " + localStorage.getItem('token');
          this.authService.GetUserByToken(this.token).subscribe(res => {
            console.log("test");
            console.log(res);
            if(res !== null || res !== undefined){
              this._spinner.hide();
              this._toasterService.Success('Login!', 'Success!');
              //set role
              localStorage.setItem('role',res.role);
              localStorage.setItem('id',res.profile_id);
              if (res.role == 'sinhvien') {
                this.Navigate('user');
              }
              if (res.role == 'admin') {
                this.Navigate('admin');
              }
              if (res.role == 'partner') {
                this.Navigate('partner');
              }
              if (res.role == 'lecturer') {
                this.Navigate('lecturer');
              }
            }else{
              this._spinner.hide();
              this._toasterService.Error('Login!', 'Fail!');
            }
        });
        }else{
          this._spinner.hide();
          this.message = 'Incorrect credentials.';
          setTimeout(function () {
            this.message = '';
          }.bind(this), 2500);
          return false;
        }
      })
    }catch(error){
      console.log(error);
    }
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }

  Navigate(controller: string) {
    // tslint:disable-next-line:no-unused-expression
    this._router.navigate(['/' + controller]);
  }

}

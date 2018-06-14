import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToasterServiceService } from '../toaster-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  username: string;
  userpassword: string;

  constructor(private authService: AuthService, public _router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private _toasterService: ToasterServiceService) {
    this.message = '';
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
  }

  login(username: string, password: string) {
    try{
      this._toasterService.Success('You are awesome!', 'Success!');
    }
    catch(error){
      console.log(error);
    }
    username = this.username;
    password = this.userpassword;
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.';
      setTimeout( function() {
        this.message = '';
      }.bind(this), 2500);
      return false;
    } else {
      // tslint:disable-next-line:no-unused-expression
      if(localStorage.getItem('role') == 'user'){
        this.toastr.success('You are awesome!', 'Success!');
        this.Navigate('user');
      }
      if(localStorage.getItem('role') == 'admin'){
        this.toastr.success('You are awesome!', 'Success!');
        this.Navigate('admin');
      }
      if(localStorage.getItem('role') == 'partner'){
        this.toastr.success('You are awesome!', 'Success!');
        this.Navigate('partner');
      }
      if(localStorage.getItem('role') == 'lecturer'){
        this.toastr.success('You are awesome!', 'Success!');
        this.Navigate('lecturer');
      }
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

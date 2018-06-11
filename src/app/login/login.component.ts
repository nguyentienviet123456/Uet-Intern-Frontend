import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(private authService: AuthService, public _router: Router) {
    this.message = '';
   }

  ngOnInit() {
  }

  login(username: string, password: string) {
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
        this.Navigate('user');
      }
      if(localStorage.getItem('role') == 'admin'){
        this.Navigate('admin');
      }
      if(localStorage.getItem('role') == 'partner'){
        this.Navigate('partner');
      }
      if(localStorage.getItem('role') == 'lecturer'){
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

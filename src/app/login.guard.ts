import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
  role: any;
  constructor(private authService: AuthService, private router: Router) {
    this.role = localStorage.getItem('role');
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     const isLoggedIn = this.authService.isLoggedIn();
     console.log(this.role);
     if(!isLoggedIn) {
       return true;
     }
     if (isLoggedIn) {
      if(this.role === "admin"){
        this.Navigate("admin")
      };
      if(this.role === "sinhvien"){
        this.Navigate("user")
      };
      if(this.role === "partner"){
        this.Navigate("partner")
      };
      if(this.role === "lecturer"){
        this.Navigate("lecturer")
      };
     } else {
      return false;
     }
  }

  private Navigate(router: string) {
    this.router.navigate(['/'+ router]);
  }
}

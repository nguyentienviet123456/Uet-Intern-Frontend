import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class LoggedInGuardUser implements CanActivate {
  role: any;
  constructor(private authService: AuthService, private router: Router) {
    this.role = localStorage.getItem('role');
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     const isLoggedIn = this.authService.isLoggedIn();
     console.log(this.role);
     if (isLoggedIn && this.role == "sinhvien") {
       return true;
     } else {
      this.NavigateLoginPage();
      return false;
     }
  }

  private NavigateLoginPage() {
    this.router.navigate(['/notauthor']);
  }
}




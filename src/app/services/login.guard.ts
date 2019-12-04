import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  loggedIn: boolean;
  isAdmin: boolean;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    return this.resolvePromise();
  }
  async resolvePromise(): Promise<boolean> {
    await this.auth.isLoggedIn().toPromise().then(() => {
      this.loggedIn = true;
      this.router.navigate(['main']);
      return false;
    }).catch(() => {
      this.loggedIn = false;
      this.router.navigate(['login']);
      return true;
    });
    console.log(this.loggedIn);
    return !this.loggedIn;
  }

  async isAdminFunc() {
    await this.auth.isAdmin().toPromise().then(() => {
      this.isAdmin = true;
      this.router.navigate(['table']);
    }).catch(() => {
      this.isAdmin = false;
      this.router.navigate(['main']);
    });
  }
  constructor(private router: Router, private auth: AuthService) { }
}


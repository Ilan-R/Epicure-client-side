import { AlerterService } from './alerter.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    return this.resolvePromise();
  }

  async resolvePromise(): Promise<boolean> {
    let admin: boolean;
    await this.auth.isAdmin().toPromise().then(() => { admin = true; }).catch(() => {
      this.alerter.alert('You are not allowed to view this page, redirecting....');
      admin = false;
      this.router.navigate(['main']);
    });
    console.log(admin);
    return admin;
  }
  constructor(private alerter: AlerterService, private router: Router, private auth: AuthService) { }
}

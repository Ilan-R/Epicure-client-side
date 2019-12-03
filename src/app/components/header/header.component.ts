import { AlerterService } from './../../services/alerter.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private alerter: AlerterService, private auth: AuthService, private router: Router) { }

  navClick() {
    console.log('navclick');
  }

  centerClick() {
    console.log('centerclick');
  }

  searchClick() {
    console.log('searchclick');
  }

  userClick() {
    console.log('userclick');
    this.router.navigate(['login']);
  }

  menuClick() {

    console.log('menuclick');
    this.auth.isAdmin().subscribe((response) => { this.alerter.alert('is admin, redirecting'); this.router.navigate(['table']) },
      err => { console.log(err); this.alerter.alert('not an admin go away!'); });

  }
  ngOnInit() {
  }

}

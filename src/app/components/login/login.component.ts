import { User } from './../../interfaces/user';
import { AuthService } from './../../services/auth.service';
import { RegisterComponent } from './../register/register.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean;
  loginForm: FormGroup;
  constructor(private titleService: Title, private metaService: Meta, private auth: AuthService,
              public dialog: MatDialog, private router: Router, private formBuilder: FormBuilder) { }
  onSubmit() {
    this.submitted = true;
    const { email, password } = this.loginForm.controls;
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.login(email.value, password.value).subscribe(response => {
      // console.log(response);
      this.auth.isAdmin().subscribe(res => {
        console.log('is admin!');
        this.router.navigate(['table']);
      },
        err => {
          console.log('not an admin');
          this.router.navigate(['.']);
        });

    }, err => {
      if (err && err.error) {
        alert(err.error.msg);
      }
    });
  }
  ngOnInit() {
    this.titleService.setTitle('Login page');
    this.metaService.addTags([
      { name: 'description', content: 'Login and enter culinary wonderland' },
      { name: 'og:image', content: 'https://source.unsplash.com/random/800x600' }
    ]);
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  openDialog() {
    const ref = this.dialog.open(RegisterComponent, {
      width: '300px'
    });
    ref.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }
}

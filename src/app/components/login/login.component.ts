import { User } from './../../interfaces/user';
import { AuthService } from './../../services/auth.service';
import { RegisterComponent } from './../register/register.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean;
  loginForm: FormGroup;
  constructor(private auth: AuthService, public dialog: MatDialog, private router: Router, private formBuilder: FormBuilder) { }
  onSubmit() {
    this.submitted = true;
    const { email, password } = this.loginForm.controls;
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.login(email.value, password.value).subscribe(response => {
      console.log(response);
      this.router.navigate(['table']);
    }, err => {
        if (err && err.error) {
          alert(err.error.msg);
        }
      });
  }
  ngOnInit() {
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
        const usr: User = this.getUser(result);
        this.auth.register(usr).subscribe(response => {
          console.log(response);

        },
          error => console.log(error));
      }
    });
  }
  getUser(res: any): User {
    return {
      first_name: res.first_name,
      last_name: res.last_name,
      email: res.email,
      normal_auth: {
        email: res.email,
        password: res.password
      }
    };
  }
}

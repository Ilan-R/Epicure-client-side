import { AlerterService } from './../../services/alerter.service';

import { Router } from '@angular/router';
import { User } from './../../interfaces/user';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fg: FormGroup;
  constructor(private router: Router, private auth: AuthService, private alerter: AlerterService,
              public dialogRef: MatDialogRef<RegisterComponent>, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.fg = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit(): void {
    console.log('onsubmit');
    const usr: User = this.getUser();
    this.auth.register(usr).subscribe(response => {
      console.log('register ', response);
      // alert('Congrats on registering!');
      this.dialogRef.close(true);
      this.auth.isAdmin().subscribe((respo) => {
        console.log('is admin',  respo);
        this.router.navigate(['table']);
      },
        err => {
          console.log('error on admin ', err);
          this.router.navigate(['']);
        });
    },
      error => {
        console.log('error on register');
        this.alerter.alert('This email is taken, how about loging in?');
        this.fg.get('email').setValue('');
        this.fg.get('password').setValue('');
      });
  }
  getUser(): User {
    return {
      first_name: this.fg.get('first_name').value,
      last_name: this.fg.get('last_name').value,
      email: this.fg.get('email').value,
      normal_auth: {
        email: this.fg.get('email').value,
        password: this.fg.get('password').value
      }
    };
  }

}

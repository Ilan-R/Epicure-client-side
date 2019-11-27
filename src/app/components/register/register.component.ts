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
  constructor(public dialogRef: MatDialogRef<RegisterComponent>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit(): void {
    this.dialogRef.close({
      first_name: this.fg.get('first_name').value,
      last_name: this.fg.get('last_name').value,
      email: this.fg.get('email').value,
      password: this.fg.get('password').value
    });
  }

}

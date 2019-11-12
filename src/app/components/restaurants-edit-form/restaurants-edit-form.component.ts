import { Router, Params } from '@angular/router';
import { RestaurantsService } from './../../services/restaurants.service';
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import {  } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Restaurant } from './../../services/restaurant';

@Component({
  selector: 'app-restaurants-edit-form',
  templateUrl: './restaurants-edit-form.component.html',
  styleUrls: ['./restaurants-edit-form.component.scss']
})
export class RestaurantsEditFormComponent implements OnInit {
  group: FormGroup;
  // name: string;
  // chef: string;
  constructor(private router: Router, private fb: FormBuilder,
    private restService: RestaurantsService, @Inject(MAT_DIALOG_DATA) public rest: Restaurant) { }

  ngOnInit(): void {
    this.group = this.fb.group({
      name: ['', Validators.required],
      chef: ['', Validators.required]
    });
    this.group.get('name').setValue(this.rest.name);
    this.group.get('chef').setValue(this.rest.chef);
  }
  onSubmit(): void {
    this.restService.addRestaurant(this.rest.name !== '' ? this.rest.name : this.group.get('name').value,
      { name: this.group.get('name').value, chef: this.group.get('chef').value })
      .subscribe();
  }

  delete(): void {
    this.restService.removeRestaurant(this.rest.name).subscribe();
  }


}

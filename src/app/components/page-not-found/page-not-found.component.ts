import { AnimationOptions } from 'ngx-lottie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/4339-not-found.json'
  };

  constructor() { }

  ngOnInit() {
  }

}

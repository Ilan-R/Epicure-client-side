import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta ) { }

  ngOnInit() {
    this.titleService.setTitle('Epicure, best site ever');
    this.metaService.addTags([
      {name: 'description', content: 'Search and order from the best restaurants in tel aviv'},
      {name: 'og:image', content: 'https://source.unsplash.com/random/800x600'}
    ]);
  }
}

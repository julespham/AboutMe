import { Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  topics = [
    {type: 'About'},
    {type: 'Work'},
    {type: 'Projects'}
  ];
  type: string;

  constructor() { }

  ngOnInit() {
  }
  toggle(type: string) {
    console.log('type' + type);
    this.type = type;
    console.log(this.type);
  }
}

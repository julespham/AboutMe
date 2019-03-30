import { Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  topics = [
    {type: 'face'},
    {type: 'work'},
    {type: 'computer'}
  ];
  type: string;
  selectedUrl = [];
  constructor() { }

  ngOnInit() {
    this.type = 'default';
    this.getTime();
  }
  toggle(type: string) {
    this.type = type;
  }
  getTime() {
    let day = new Date();
    let hours = day.getHours();
    console.log('day ' +  day.getHours());
    // if (0 > hours > 9 ) {
    //
    // }
  }
  selectedURL(type) {
    switch (type) {
      case 'face':
        return '../../assets/images/404.jpg';
      case 'work':
        return '../../assets/images/lazygirl.jpg';
      case 'computer':
        return '../../assets/images/404.jpg';
      case 'default':
        return '../../assets/images/camping.jpg';
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  title = 'About';

  constructor() { }

  ngOnInit() {
    
  }

  setTitle(title) {
    this.title = title
  }

}
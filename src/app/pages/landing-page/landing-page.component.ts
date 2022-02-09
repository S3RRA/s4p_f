import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styles: [
  ]
})
export class LandingPageComponent {

  where = [];

  email = localStorage.getItem('email')!;
  name = '';

  constructor() {
    this.name = this.email[0].toUpperCase() + this.email.substring(1, this.email.indexOf('.')).toLowerCase();
  }

}

import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.sass'],
})
export class AboutmeComponent {
  getdone() {
    return true;
  }
  isVisible = false;
  isFullyHidden = true;

  constructor() {}
}

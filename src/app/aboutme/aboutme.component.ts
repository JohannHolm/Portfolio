import { Component, ElementRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-aboutme',
    templateUrl: './aboutme.component.html',
    styleUrls: ['./aboutme.component.sass'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AboutmeComponent {
  getdone() {
    return true;
  }
  isVisible = false;
  isFullyHidden = true;

  constructor() {}
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollService } from '../services/scroll.service';


@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.sass'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PrivacyComponent {
  constructor(private scrollService: ScrollService) {}

  ngOnInit(){
    this.scrollService.scrollToTop();
  }
}

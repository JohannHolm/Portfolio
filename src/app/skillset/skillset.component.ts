import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-skillset',
    templateUrl: './skillset.component.html',
    styleUrls: ['./skillset.component.sass'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SkillsetComponent {
  isVisible = false;
  isFullyHidden = true;
}

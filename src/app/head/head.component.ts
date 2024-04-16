import { Component } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass'],
})
export class HeadComponent {
  isVisible = false;
  isFullyHidden = true;
  mobilemenu: boolean = false;
  mobileMenu() {
    this.mobilemenu = !this.mobilemenu;
  }
}

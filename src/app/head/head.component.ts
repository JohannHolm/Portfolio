import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass'],
})
export class HeadComponent implements OnInit, OnDestroy {
  isVisible = false;
  isFullyHidden = true;
  mobilemenu: boolean = false;

  roles = ['Frontend Developer', 'Angular', 'Astro', 'TypeScript'];
  currentRoleIndex = 0;
  showRole = true;
  isRoleLeaving = false;

  private roleInterval: ReturnType<typeof setInterval> | null = null;

  get currentRole(): string {
    return this.roles[this.currentRoleIndex];
  }

  mobileMenu() {
    this.mobilemenu = !this.mobilemenu;
  }

  ngOnInit(): void {
    this.roleInterval = setInterval(() => this.transitionToNextRole(), 2800);
  }

  private transitionToNextRole(): void {
    this.isRoleLeaving = true;
    setTimeout(() => {
      this.showRole = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      setTimeout(() => {
        this.showRole = true;
        this.isRoleLeaving = false;
      }, 30);
    }, 400);
  }

  ngOnDestroy(): void {
    if (this.roleInterval !== null) {
      clearInterval(this.roleInterval);
    }
  }
}

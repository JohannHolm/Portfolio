import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]',
})
export class FadeInOnScrollDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.elementRef.nativeElement.classList.add('visible');
          observer.unobserve(this.elementRef.nativeElement);
        }
      });
    }, options);

    observer.observe(this.elementRef.nativeElement);
  }
}

import { Component, HostListener, ViewChild, type ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss'
})
export class ScrollToTopComponent {
  @ViewChild('totop') totop!: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop; // Usando scrollY
    if (scrollTop > 300) {
      this.totop.nativeElement.classList.add('on--totop');
    } else {
      this.totop.nativeElement.classList.remove('on--totop');
    }
  }
}
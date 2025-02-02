import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'cafeteria';
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('mascara') mascara!: ElementRef;

  ngAfterViewInit(): void {
    console.log('This.modal is already defined: ', this.modal);
  }

  mostrarModal() {
    this.modal.nativeElement.style.left = '50%';
    this.mascara.nativeElement.style.visibility = 'visible';
  }

  fecharModal() {
    this.modal.nativeElement.style.left = '-30%';
    this.mascara.nativeElement.style.visibility = 'hidden';
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const button = document.getElementById('totop');

    if (scrollTop > 300) {
      button?.classList.add('on--totop');
    } else {
      button?.classList.remove('on--totop');
    }
  }
}

import { Component } from '@angular/core';
import { VideoBackgroundComponent } from './components/video-background/video-background.component';
import { HeaderComponent } from './components/header/header.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ModalComponent } from './components/modal/modal.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    VideoBackgroundComponent,
    HeaderComponent,
    MainSectionComponent,
    AboutSectionComponent,
    ModalComponent,
    ScrollToTopComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  modalVisible = false;
}

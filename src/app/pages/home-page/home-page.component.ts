import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { GalleriaModule } from 'primeng/galleria';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { OutlinedButtonComponent } from '../../components/outlined-button/outlined-button.component';
import { ContattiComponent } from './contatti/contatti.component';
import { homePage } from '../../../data/home-page.data';
import { TabItemComponent } from '../../components/tab-item/tab-item.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    GalleriaModule,
    ChiSiamoComponent,
    CarouselComponent,
    OutlinedButtonComponent,
    ContattiComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  homePageData = homePage;
  isPhone: boolean = false;

  ngOnInit(): void {
    const ua = navigator.userAgent;
    this.isPhone =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
        ua
      );
  }
}

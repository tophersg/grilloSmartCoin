import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule,
    InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grilloSmartcoin';
  backgroundUrl?: String;
  ngOnInit() {
    const images = [
      '/assets/img/pandaFondo.webp',
      '/assets/img/pandaFondo2.webp'
    ];

    // Seleccionar una imagen al azar
    const randomIndex = Math.floor(Math.random() * images.length);
    this.backgroundUrl = images[randomIndex];
  }
}

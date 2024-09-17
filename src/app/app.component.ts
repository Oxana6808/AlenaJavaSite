import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,      // Подключаем RouterOutlet для маршрутизации
    HeaderComponent,   // Подключаем standalone-компоненты
    MenuComponent,
    ContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AlenaJavaSite';  // Добавляем title, если нужно
}

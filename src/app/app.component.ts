import { Component, AfterViewInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import Prism from 'prismjs';

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
export class AppComponent implements AfterViewInit{

  title = 'AlenaJavaSite';  // Добавляем title, если нужно

  ngAfterViewInit() {
    Prism.highlightAll(); // Инициализация Prism.js для подсветки
  }


}

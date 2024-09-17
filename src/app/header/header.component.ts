import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';  // Импортируем модуль Material Toolbar

@Component({
  selector: 'app-header',
  standalone: true,  // Указываем, что это standalone-компонент
  imports: [
    RouterOutlet,     // Подключаем RouterOutlet для работы с маршрутизацией
    MatToolbarModule  // Подключаем MatToolbarModule для работы с Material Toolbar
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
}

import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';  // Импортируем RouterOutlet и RouterModule

@Component({
  selector: 'app-content',
  standalone: true,  // Указываем, что это standalone-компонент
  imports: [
    RouterOutlet,  // Подключаем RouterOutlet для отображения динамического контента через маршрутизацию
    RouterModule   // Подключаем RouterModule, если нужно использовать routerLink или другие маршрутизационные возможности
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
}

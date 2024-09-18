import { Component, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-subcontent1',  // Селектор компонента
  standalone: true,  // Указываем, что это standalone-компонент
  imports: [],  // Если маршрутизация внутри компонента не требуется, можно не подключать RouterOutlet
  templateUrl: './subcontent1.component.html',
  styleUrls: ['./subcontent1.component.css']
})
export class Subcontent1Component implements AfterViewInit{
  ngAfterViewInit() {
    Prism.highlightAll();  // Инициализируем Prism.js для подсветки кода
  }
}
